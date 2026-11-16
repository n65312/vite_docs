/// <reference types="vite/client" />

// https://vitepress.dev/guide/custom-theme
import Teek from 'vitepress-theme-teek'
import 'vitepress-theme-teek/index.css'
import './style.css'
import Layout from './Layout.vue'
import {
  attachSidebarAccordion,
  bindAfterPageLoad,
  readSidebarAccordion,
  SIDEBAR_ACCORDION_OPTION,
  SIDEBAR_TITLE_ROUTE_FLAG,
} from './accordion.mjs'

/** 侧栏链接补齐 title，供省略文字悬停查看（TOC 链接原生已有）。 */
function applySidebarTitles(): void {
  document.querySelectorAll<HTMLElement>('.VPSidebar .VPSidebarItem .text').forEach((el) => {
    if (el.getAttribute('title')) return
    const text = el.textContent?.trim()
    if (text) el.setAttribute('title', text)
  })
}

export default {
  extends: Teek,
  Layout,

  // extends 会自动执行 Teek.enhanceApp，此处只补自身逻辑
  enhanceApp({ router, siteData }: { router: any; siteData: any }) {
    if (typeof document === 'undefined') return

    // 配置项仅作为首次访问的默认值，运行期开关以 localStorage 为准，默认关闭
    const themeConfig = (siteData?.value?.themeConfig ?? {}) as Record<string, unknown>
    const defaultEnabled = themeConfig[SIDEBAR_ACCORDION_OPTION] === true

    // rAF 合并高频 DOM 变更
    let scheduled = false
    const schedule = () => {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => {
        scheduled = false
        applySidebarTitles()
      })
    }

    // 按 VitePress 单回调语义追加，避免覆盖 Teek 已挂载的路由钩子
    bindAfterPageLoad(router, SIDEBAR_TITLE_ROUTE_FLAG, schedule)
    // 仅监听 childList，避免设置 title 触发自身回调
    new MutationObserver(schedule).observe(document.body, {
      childList: true,
      subtree: true,
    })

    attachSidebarAccordion({
      router,
      isEnabled: () => readSidebarAccordion(defaultEnabled),
    })
  },
}
