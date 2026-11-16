import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import { defineTeekConfig } from 'vitepress-theme-teek/config'
import packageJson from '../../package.json'

// 启用回到顶部，关闭会改写 URL/侧栏/标题的插件以保留现有结构
const teekConfig = defineTeekConfig({
  teekTheme: true,
  teekHome: false,
  vpHome: true,
  backTop: {
    enabled: true,
    content: 'icon',
  },
  // 本站未配置任何评论服务，关闭无效的"前往评论"按钮（评论容器不会渲染）
  toComment: {
    enabled: false,
  },
  viewTransition: {
    enabled: true,
  },
  vitePlugins: {
    sidebar: false,
    permalink: false,
    mdH1: false,
    docAnalysis: false,
    autoFrontmatter: false,
  },
})

// 动态设置 base 路径
//const isDevEnvironment = process.env.NODE_ENV === 'development'
//const base = isDevEnvironment ? '/' : '/vite_docs/'

// 这里的逻辑：只有在 GitHub Actions 环境下才带子路径
// Cloudflare 和本地开发都会使用根路径 '/'
const base = process.env.GITHUB_ACTIONS === 'true' ? '/vite_docs/' : '/'

// 提取常量
const presentYear = new Date().getFullYear()
const logoConfig = {src: '/logo-32.png', width: 24, height: 24}

// 定义侧边栏目录， 用于手动排序
// 这里的目录名需要与实际文件夹名保持一致
const sidebarDirs = [
  'html', 'css', 'js', 'ts', 'vue', 'article'
]

// 侧边栏基础配置
const baseSidebarConfig = {
  manualSortFileNameByPriority: sidebarDirs, // 手动排序文件名
  collapsed: true, // 是否默认折叠
  capitalizeFirst: false, // 是否将标题首字母大写
  useTitleFromFileHeading: true, // 是否使用文件中的标题作为侧边栏标题
  useTitleFromFrontmatter: true, // 是否使用 frontmatter 中的标题作为侧边栏标题
  useFolderTitleFromIndexFile: true, // 是否使用文件夹中的 index 文件标题作为侧边栏标题
  sortMenusByFrontmatterOrder: true, // 按 frontmatter order 排序，不依赖文件名编号
  frontmatterOrderDefaultValue: 999, // 未声明 order 者排末尾
}

// 侧边栏配置 
const sidebarConfig = [
  {
    ...baseSidebarConfig,
    documentRootPath: 'docs',
    resolvePath: '/',
  },
]

// 头部元信息配置
const headConfig: HeadConfig[] = [
  ['link', {rel: 'icon', type: 'image/png', href: `${base}logo-32.png`, sizes: '32x32'}],
  ['link', {rel: 'icon', type: 'image/png', href: `${base}logo-16.png`, sizes: '16x16'}],
  ['link', {rel: 'shortcut icon', href: `${base}favicon.ico` }],
  ['meta', {name: 'algolia-site-verification', content: '7F3B451E0494ADF6'}],
]

// 主题配置
const themeConfig = {
  logo: logoConfig,
  docFooter: {
    prev: '上一页',
    next: '下一页',
  },
  search:{
    provider: 'algolia',
    options: {
      appId: '2S79GGI9JQ',
      apiKey: '69047d25be530a400c6f4bfdc3cd448b',
      indexName: 'n65312io'
    }
  },
  nav: [
    {text: '首页', link: '/'},
    {
      text: '前端',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue'].map((text, index) => ({
        text,
        link: `${['html', 'css', 'js', 'ts', 'vue'][index]}/00`,
      }))
    },
    {text: '文章', link: 'article/00'},
    {
      text: '友链',
      items:[
        {text: 'VitePress', link: 'https://vitepress.dev/zh/'},
        {text: 'Cloudflare', link: 'https://dash.cloudflare.com/'},
      ]
    }
  ],
  socialLinks: [{icon: 'github', link: 'https://github.com/n65312/vite_docs'}],
  footer: {
    message: '基于 MIT 许可发布',
    copyright: `版权所有 © 2023-${presentYear} 林的博客`,
  },
  // 侧栏分组展开模式的首次访问默认值（默认关闭，保持多分组同时展开）。
  // 运行期可在导航栏"主题增强"面板内切换，选择存于 localStorage，优先级高于此默认值。
  // 开启后仅作用于顶层可折叠分组；不影响路由、正文与搜索。
  sidebarAccordion: false,
}

//  VitePress 站点配置
const vitePressConfig = {
  title: 'N的叁次方',
  lastUpdated: true,
  lang: 'zh-CN',
  base: `${base}`,
  cleanUrls: true,
  metaChunk: true,
  head: headConfig,
  sitemap: {
    hostname: packageJson.homepage,
  },
  themeConfig,
  extends: teekConfig,
}

// 定义最终配置
export default defineConfig(withSidebar(vitePressConfig, sidebarConfig))
