import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Qionglou',
      description: 'A Vue.js 3 UI Toolkit for Web',
      head: [
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.svg'
          }
        ],
        [
          'meta',
          {
            name: 'keywords',
            content:
              'component library, customizable UI components, frontend design system, theme customization, atomic design, Vue.js, UI/UX, web development, front-end framework, responsive design, modern UI, scalable components, developer tools.'
          }
        ],
        [
          'meta',
          {
            name: 'description',
            content:
              'Qionglou is an atomized and highly customizable component library that allows you to create and deploy different themes. With Qionglou, you can build your own frontend design system, tailored to your unique needs.'
          }
        ]
      ],
      themeConfig: {
        nav: [
          {
            text: 'Getting Started',
            link: '/zh-cn/get-started/',
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
                text: '了解qionglou',
                link: '/zh-cn/get-started/'
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
            link: '/zh-cn/get-started/',
            items: [
              { text: '快速上手' },
              { text: '贡献指南', link: '/zh-cn/get-started/dev_guides' },
              { text: '提交规范', link: '/zh-cn/get-started/commit_stand' },
              { text: '加入我们' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    logo: {
      light: '/logo/light.png',
      dark: '/logo/dark.png'
    },
    siteTitle: false
  },
  markdown: {
    lineNumbers: true
  }
})
