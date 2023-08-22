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
        text: 'Component',
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
        items: [{ text: '基础组件' }]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
