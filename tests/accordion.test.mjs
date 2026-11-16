import test from 'node:test'
import assert from 'node:assert/strict'
import {
  SIDEBAR_ACCORDION_OPTION,
  SIDEBAR_ACCORDION_STORAGE_KEY,
  SIDEBAR_ACCORDION_CHANGE_EVENT,
  SIDEBAR_ACCORDION_ROUTE_FLAG,
  readSidebarAccordion,
  writeSidebarAccordion,
  bindAfterPageLoad,
  pickGroupsToCollapse,
  attachSidebarAccordion,
} from '../docs/.vitepress/theme/accordion.mjs'

const groups = (states) =>
  states.map(([isActive, isCollapsed]) => ({ isActive, isCollapsed }))

test('开关名字符合项目现有的驼峰命名规范', () => {
  assert.equal(SIDEBAR_ACCORDION_OPTION, 'sidebarAccordion')
})

test('开关关闭：保持原有行为，不产生任何收起目标', () => {
  const input = groups([[false, false], [true, false], [false, false]])
  assert.deepEqual(pickGroupsToCollapse(input, false, [1]), [])
})

test('开关开启 - 路由路径：保留当前活动分组，收起其余展开分组', () => {
  const input = groups([[false, false], [true, false], [false, true], [false, false]])
  assert.deepEqual(pickGroupsToCollapse(input, true, [1]), [0, 3])
})

test('开关开启 - 点击路径：保留刚展开的分组，收起原活动分组', () => {
  const input = groups([[true, false], [false, false], [false, true]])
  assert.deepEqual(pickGroupsToCollapse(input, true, [1]), [0])
})

test('边界：无保留目标时收起全部已展开分组', () => {
  const input = groups([[true, false], [false, false]])
  assert.deepEqual(pickGroupsToCollapse(input, true, [-1]), [0, 1])
})

test('边界：空数组、全部折叠、非法输入均安全返回', () => {
  assert.deepEqual(pickGroupsToCollapse([], true), [])
  assert.deepEqual(pickGroupsToCollapse(groups([[false, true], [true, true]]), true, [1]), [])
  assert.deepEqual(pickGroupsToCollapse(null, true), [])
  assert.deepEqual(pickGroupsToCollapse(undefined, false), [])
  assert.deepEqual(pickGroupsToCollapse([null, undefined], true), [])
})

test('持久化：无存储项取默认值，写入后读回并广播变更事件', (t) => {
  const store = new Map()
  const events = []
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, v),
  }
  globalThis.window = {
    dispatchEvent: (e) => events.push(e),
  }
  globalThis.CustomEvent = class {
    constructor(type, options) {
      this.type = type
      this.detail = options?.detail
    }
  }
  t.after(() => {
    delete globalThis.localStorage
    delete globalThis.window
    delete globalThis.CustomEvent
  })

  assert.equal(readSidebarAccordion(false), false, '无存储项时取默认关闭')
  assert.equal(readSidebarAccordion(true), true, '无存储项时取传入默认值')
  assert.equal(store.has(SIDEBAR_ACCORDION_STORAGE_KEY), false)

  writeSidebarAccordion(true)
  assert.equal(store.get(SIDEBAR_ACCORDION_STORAGE_KEY), 'true')
  assert.equal(readSidebarAccordion(false), true, '持久化值覆盖默认值')
  assert.equal(events[0]?.type, SIDEBAR_ACCORDION_CHANGE_EVENT)
  assert.deepEqual(events[0]?.detail, { enabled: true })

  writeSidebarAccordion(false)
  assert.equal(readSidebarAccordion(true), false)
})

test('路由钩子：按 VitePress 单回调语义追加，保留原回调且按 stateFlag 防重复', async () => {
  const calls = []
  const router = {
    onAfterPageLoad: (to) => { calls.push(`original:${to}`) },
  }
  const mine = (to) => { calls.push(`mine:${to}`) }

  bindAfterPageLoad(router, SIDEBAR_ACCORDION_ROUTE_FLAG, mine)
  assert.equal(typeof router.onAfterPageLoad, 'function', '注册后仍是单个回调属性')
  assert.equal(router.state[SIDEBAR_ACCORDION_ROUTE_FLAG], true)

  await router.onAfterPageLoad('/a')
  assert.deepEqual(calls, ['original:/a', 'mine:/a'], '原回调在前、新回调在后串联执行')

  bindAfterPageLoad(router, SIDEBAR_ACCORDION_ROUTE_FLAG, mine)
  await router.onAfterPageLoad('/b')
  assert.deepEqual(calls, ['original:/a', 'mine:/a', 'original:/b', 'mine:/b'], '同一 flag 重复调用不会二次包装')
})

test('路由钩子：无原回调时安全注册，无效入参不抛错', async () => {
  const router = {}
  let received = null
  bindAfterPageLoad(router, 'flag', (to) => { received = to })
  await router.onAfterPageLoad('/x')
  assert.equal(received, '/x', '无原回调时新回调仍被调用')

  assert.doesNotThrow(() => bindAfterPageLoad(null, 'flag', () => {}))
  assert.doesNotThrow(() => bindAfterPageLoad(router, 'flag', null))
})

test('运行时门控：isEnabled 为假时点击不收起，为真时注册捕获监听并响应开关事件', (t) => {
  const listeners = {}
  globalThis.document = {
    addEventListener: (type, fn) => { listeners[type] = fn },
    removeEventListener: (type) => { delete listeners[type] },
    querySelector: () => null,
  }
  globalThis.window = {
    addEventListener: (type, fn) => { listeners[type] = fn },
    removeEventListener: (type) => { delete listeners[type] },
  }
  globalThis.requestAnimationFrame = (fn) => fn()
  t.after(() => {
    delete globalThis.document
    delete globalThis.window
    delete globalThis.requestAnimationFrame
  })

  let enabled = false
  const router = {}
  const dispose = attachSidebarAccordion({ router, isEnabled: () => enabled })

  assert.ok(listeners.click, '点击监听始终注册以支持即时切换')
  assert.ok(listeners[SIDEBAR_ACCORDION_CHANGE_EVENT], '开关变更监听已注册')
  assert.equal(typeof router.onAfterPageLoad, 'function', '路由钩子按单回调语义注册成功')
  assert.equal(router.state[SIDEBAR_ACCORDION_ROUTE_FLAG], true)

  const fakeClick = {
    isTrusted: true,
    target: { closest: () => null },
  }
  assert.doesNotThrow(() => listeners.click(fakeClick), '关闭态点击不抛错')

  enabled = true
  assert.doesNotThrow(() => listeners[SIDEBAR_ACCORDION_CHANGE_EVENT](), '开启态变更事件不抛错')

  assert.equal(typeof dispose, 'function')
  dispose()
  assert.equal(listeners.click, undefined, '解绑后点击监听被移除')
  assert.equal(listeners[SIDEBAR_ACCORDION_CHANGE_EVENT], undefined, '解绑后变更监听被移除')
})
