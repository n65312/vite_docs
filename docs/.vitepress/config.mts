
import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// 该配置文件用于配置 VitePress 的站点信息、主题配置、导航栏、侧边栏等  
const vitePressOptions = {
  title: '林的博客',
  description: "欢迎来到 “林的博客”！这里是专注前端技术的学习乐园，深度解析 HTML、CSS、JavaScript 基础语法与实战技巧，更有 Vue 框架从入门到进阶的全流程经验分享。无论是代码原理剖析，还是项目案例拆解，都能助你轻松掌握前端开发技能，与木木一同开启高效学习之旅。",
  themeConfig:{
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    head: [
    ['link',{ rel: 'icon', href: '/logo.png' }],
  ],
    base: '/vite_docs/',
    lastUpdated: true,
    cleanUrls: true,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', items: [
        { text: 'HTML', link: '/html/' },
        { text: 'CSS', link: '/css/' },
        { text: 'JavaScript', link: '/js/' },
        { text: 'TypeScript', link: '/ts/' },
        { text: 'Vue', link: '/vue/' },
      ] },
      { text: '文章', link: '/article/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://vitepress.dev'}
    ]
  }
}
/**
 * 自动生成侧边栏配置
 * 通过 vitepress-sidebar 插件来实现
 * 该插件会扫描指定目录下的 Markdown 文件，并根据文件名和目录结构 
 */ 
export default defineConfig(
  withSidebar(vitePressOptions, [
    {
    documentRootPath: 'docs',
    scanStartPath: 'html',
    resolvePath: '/html/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'css',
    resolvePath: '/css/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'js',
    resolvePath: '/js/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'ts',
    resolvePath: '/ts/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'vue',
    resolvePath: '/vue/',
    useTitleFromFileHeading: true,
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'article',
    resolvePath: '/article/',
    useTitleFromFileHeading: true,
  }
])
)

// https://vitepress.dev/reference/site-config

// https://vitepress.dev/reference/default-theme-config
