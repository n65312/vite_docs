// 侧栏分组展开模式的运行时核心逻辑。
// 决策函数与 DOM 操作分离，便于在无浏览器环境中验证开关的两条路径。

export const SIDEBAR_ACCORDION_OPTION = 'sidebarAccordion'
export const SIDEBAR_ACCORDION_STORAGE_KEY = 'tk:sidebar-accordion'
export const SIDEBAR_ACCORDION_CHANGE_EVENT = 'tk:sidebar-accordion-change'
export const SIDEBAR_ACCORDION_ROUTE_FLAG = 'tk:sidebar-accordion-route'
export const SIDEBAR_TITLE_ROUTE_FLAG = 'tk:sidebar-title'

/** 读取持久化开关值。无存储项时返回传入的默认值，默认关闭。 */
export function readSidebarAccordion(defaultValue = false) {
  if (typeof localStorage === 'undefined') return defaultValue
  const raw = localStorage.getItem(SIDEBAR_ACCORDION_STORAGE_KEY)
  if (raw === null) return defaultValue
  return raw === 'true'
}

/** 写入持久化开关并广播变更，供已绑定的监听实时感知。 */
export function writeSidebarAccordion(value) {
  const enabled = !!value
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(SIDEBAR_ACCORDION_STORAGE_KEY, String(enabled))
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(SIDEBAR_ACCORDION_CHANGE_EVENT, { detail: { enabled } }))
  }
}

/**
 * 计算需要收起的分组索引。
 * 用途：实现同一层级仅保留一个展开分组的手风琴行为。
 * 默认值：enabled 为假时返回空数组，完全保持 VitePress 原有行为。
 * 影响范围：只处理传入的顶层可折叠分组，keepIndices 中指定的分组始终保留。
 */
export function pickGroupsToCollapse(groups, enabled, keepIndices = []) {
  if (!enabled || !Array.isArray(groups) || groups.length === 0) return []
  const keep = new Set(Array.isArray(keepIndices) ? keepIndices : [])
  const result = []
  for (let index = 0; index < groups.length; index += 1) {
    const group = groups[index]
    if (!group || group.isCollapsed || keep.has(index)) continue
    result.push(index)
  }
  return result
}

/** 读取侧栏顶层可折叠分组的状态快照，供决策函数使用。 */
export function readSidebarGroups(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return []
  return Array.from(root.querySelectorAll('.VPSidebarItem.level-0.collapsible')).map((el) => ({
    el,
    isActive: el.classList.contains('has-active') || el.classList.contains('is-active'),
    isCollapsed: el.classList.contains('collapsed'),
  }))
}

/** 收起单个分组。带链接分组点箭头避免导航，纯文本分组点标题行；模拟点击不会被本模块监听再次处理。 */
function collapseGroup(el) {
  const header = el.querySelector(':scope > .item')
  if (!header) return
  const hasLink = !!header.querySelector(':scope > .link')
  const caret = header.querySelector(':scope > .caret')
  if (hasLink && caret) caret.click()
  else header.click()
}

/**
 * 把回调追加到 VitePress 的 onAfterPageLoad 钩子上。
 * 该钩子是单个回调属性而非监听器列表，直接赋值会覆盖主题已挂载的逻辑，
 * 因此保留原回调并在其后串联新回调，与官方 useVpRouter 的追加方式一致。
 * stateFlag 用于标记已绑定，避免 enhanceApp 重复执行时二次包装。
 */
export function bindAfterPageLoad(router, stateFlag, callback) {
  if (!router || typeof callback !== 'function') return
  const state = router.state || {}
  if (state[stateFlag]) return
  const previous = typeof router.onAfterPageLoad === 'function' ? router.onAfterPageLoad : undefined
  router.onAfterPageLoad = async (to) => {
    await previous?.(to)
    await callback(to)
  }
  router.state = { ...state, [stateFlag]: true }
}

/**
 * 绑定互斥交互。isEnabled 为运行时读取开关的函数；返回函数可解绑 DOM 监听。
 * VitePress 路由钩子没有解绑接口，按单回调语义追加后长期有效。
 * 关闭时不收起任何分组（多组可同时展开），开启时点击保留刚展开项、路由保留当前项。
 * 监听始终存在以保证开关即时生效，但所有决策都经 isEnabled 门控。
 */
export function attachSidebarAccordion({ router, isEnabled = () => false } = {}) {
  if (typeof document === 'undefined') return () => {}

  const rootSelector = '.VPSidebar'
  const pending = new Set()
  const scheduleOnce = (key, fn) => {
    if (pending.has(key)) return
    pending.add(key)
    requestAnimationFrame(() => {
      pending.delete(key)
      fn()
    })
  }
  const apply = (root, keepIndex) => {
    if (!isEnabled()) return
    const groups = readSidebarGroups(root)
    for (const index of pickGroupsToCollapse(groups, true, [keepIndex])) {
      collapseGroup(groups[index].el)
    }
  }

  const onClick = (event) => {
    if (!isEnabled()) return
    if (!event.isTrusted) return
    const target = event.target
    if (!target || typeof target.closest !== 'function') return
    const root = target.closest(rootSelector)
    if (!root) return
    const level0 = target.closest('.VPSidebarItem.level-0.collapsible')
    if (!level0) return
    const header = level0.querySelector(':scope > .item')
    if (!header || !header.contains(target)) return
    if (!level0.classList.contains('collapsed')) return

    const groups = readSidebarGroups(root)
    const keepIndex = groups.findIndex((group) => group.el === level0)
    scheduleOnce('click', () => apply(root, keepIndex))
  }

  document.addEventListener('click', onClick, true)

  bindAfterPageLoad(router, SIDEBAR_ACCORDION_ROUTE_FLAG, () => {
    scheduleOnce('route', () => {
      if (!isEnabled()) return
      const root = document.querySelector(rootSelector)
      const groups = readSidebarGroups(root)
      const activeIndex = groups.findIndex((group) => group.isActive)
      apply(root, activeIndex)
    })
  })

  const onChange = () => {
    if (!isEnabled()) return
    scheduleOnce('change', () => {
      const root = document.querySelector(rootSelector)
      const groups = readSidebarGroups(root)
      const activeIndex = groups.findIndex((group) => group.isActive)
      apply(root, activeIndex)
    })
  }
  window.addEventListener(SIDEBAR_ACCORDION_CHANGE_EVENT, onChange)

  return () => {
    document.removeEventListener('click', onClick, true)
    window.removeEventListener(SIDEBAR_ACCORDION_CHANGE_EVENT, onChange)
  }
}
