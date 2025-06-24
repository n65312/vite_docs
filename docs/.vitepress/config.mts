import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import packageJson from '../../package.json'

// 动态设置 base 路径
const isDevEnvironment = process.env.NODE_ENV === 'development'
const base = isDevEnvironment ? '/' : '/vite_docs/'

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
const headConfig = [
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
  ],
  socialLinks: [{icon: 'github', link: 'https://github.com/n65312/vite_docs'}],
  footer: {
    message: '基于 MIT 许可发布',
    copyright: `版权所有 © 2023-${presentYear} 林的博客`,
  },
}

//  VitePress 站点配置
const vitePressConfig = {
  title: '林的博客',
  lastUpdated: true,
  lang: 'zh-CN',
  base: `${base}`,
  cleanUrls: true,
  metaChunk: true,
  head: headConfig,
  sitemap: {
    hostname: packageJson.homepage,
  },
  themeConfig
}

// 定义最终配置
export default defineConfig(withSidebar(vitePressConfig, sidebarConfig))
