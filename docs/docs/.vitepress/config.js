import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Qionglou',
      description: 'A Vue.js 3 UI Toolkit for Web',
      themeConfig: {
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
              { text: '加入我们' }
            ]
          }
        ]
      }
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-cn',
      title: '琼楼',
      description: 'Vue3 原子化组件库',
      themeConfig: {
        nav: [
          {
            text: '入门指南',
            link: '/zh-cn/get-started/',
            items: [
              {
                text: '了解qionglou'
              }
            ]
          },
          {
            text: '指令',
            link: ''
          },
          {
            text: '组件',
            link: '/components/index'
          },
          {
            text: '社区',
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
      }
    }
  },
  themeConfig: {
    logo: {
      light: '/logo/light.svg',
      dark: '/logo/dark.svg'
    },
    siteTitle: false
  },
  markdown: {
    lineNumbers: true
  }
})
