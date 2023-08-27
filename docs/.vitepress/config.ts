import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Qionglou',
      link: '/'
    },
    zh_cn: {
      label: '简体中文',
      lang: 'zh-cn',
      title: '琼楼',
      link: '/zh-cn/'
    }
  },
  themeConfig: {
    logo: {
      light: '/logo/light.png',
      dark: '/logo/dark.png'
    },
    siteTitle: false,
    nav: [
      {
        text: 'Getting Started',
        link: '/zh-cn/get-started/',
        items: [
          {
            text: '了解qionglou',
            link: '/zh-cn/get-started/'
          },
          {
            text: '贡献指南',
            link: '/zh-cn/get-started/dev_guides'
          }
        ]
      },
      {
        text: 'Command',
        link: ''
      },
      {
        text: 'Editor',
        link: '/zh-cn/components/index'
      },
      {
        text: 'Community',
        link: ''
      }
    ],
    sidebar: [
      {
        text: '欢迎来到琼楼',
        link: '/zh-cn/get-started/',
        items: [
          { text: '<b style="color: darkgrey">基础组件</b>' },
          { text: '按钮', link: '/zh-cn/get-started/basic/button' },
          { text: '<b style="color: darkgrey">布局</b>' },
          { text: '区域布局', link: '/zh-cn/get-started/layout/fix' },
          { text: '内容分栏', link: '/zh-cn/get-started/layout/header' },
          { text: '内容区域', link: '/zh-cn/get-started/layout/main' },
          { text: '区域大小', link: '/zh-cn/get-started/layout/per' },
          { text: '<b style="color: darkgrey">弹出层</b>' },
          { text: '加载组件', link: '/zh-cn/get-started/basic/loading' },
          { text: '抽屉层', link: '/zh-cn/get-started/basic/drawer' },
          { text: '对话框', link: '/zh-cn/get-started/basic/dialog' }
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
