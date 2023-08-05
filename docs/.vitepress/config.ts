import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Qionglou'
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
        link: '/get-started/',
        items: [
          {
            text: '了解qionglou',
            link: '/get-started/'
          },
          {
            text: '贡献指南',
            link: '/get-started/dev_guides'
          }
        ]
      },
      {
        text: 'Command',
        link: ''
      },
      {
        text: 'Component',
        link: '/components/index'
      },
      {
        text: 'Community',
        link: ''
      }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/get-started',
        items: [
          { text: '快速上手' },
          { text: '指南' },
          { text: '指令' },
          { text: '加入我们' }
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
