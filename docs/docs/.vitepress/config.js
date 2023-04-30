import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Qionglou',
  description: 'A Vue.js 3 UI Toolkit for Web',
  themeConfig: {
    logo: {
      light: '/logo/light.svg',
      dark: '/logo/dark.svg'
    },
    siteTitle: false,
    nav: [
      {
        text: 'Getting Started',
        link: '/get-started/',
        items: [
          {
            text: '了解qionglou'
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
          { text: '加入我们' },
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
