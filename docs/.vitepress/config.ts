import { defineConfig } from 'vitepress'
// @ts-ignore
import vpressdemo from "../plugins/vpressdemo";

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
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
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(vpressdemo);
    },
  },
  themeConfig: {
    logo: {
      light: '/logo/light.webp',
      dark: '/logo/dark.webp'
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
        link: '/editor'
      },
      {
        text: 'Community',
        link: ''
      }
    ],
    sidebar: [
      {
        text: '感谢使用琼楼',
        link: '/zh-cn/get-started/',
        items: [
          {
            text: '<b style="color: darkgrey">基础组件</b>',
            items: [
              {
                text: '按钮' +
                    '<span>button</span>',
                link: '/zh-cn/get-started/basic/button'
              },
              {
                text: '图标',
                link: '/zh-cn/get-started/basic/icon'
              },
              {
                text: '文本',
                link: '/zh-cn/get-started/basic/text'
              }
            ]
          },
          {
            text: '<b style="color: darkgrey">表单</b>',
            items: [
              {
                text: '表格' +
                    '<span>table</span>',
                link: '/zh-cn/get-started/form/table'
              },
              {
                text: '分页' +
                    '<span>pagination</span>',
                link: '/zh-cn/get-started/form/pagination'
              },
              {
                text: '输入框' +
                    '<span>input</span>',
                link: '/zh-cn/get-started/form/input'
              }
            ]
          },
          {
            text: '<b style="color: darkgrey">布局</b>',
            items: [
              { text: '区域布局', link: '/zh-cn/get-started/layout/fix' },
              { text: '内容分栏', link: '/zh-cn/get-started/layout/col' },
              { text: '内容区域', link: '/zh-cn/get-started/layout/main' },
              { text: '区域大小', link: '/zh-cn/get-started/layout/per' },
            ]
          },
          {
            text: '<b style="color: darkgrey">弹出层</b>',
            items: [
              { text: '加载组件', link: '/zh-cn/get-started/pop-up/loading' },
              { text: '抽屉层', link: '/zh-cn/get-started/pop-up/drawer' },
              { text: '提示框', link: '/zh-cn/get-started/pop-up/drawer' },
              { text: '对话框', link: '/zh-cn/get-started/pop-up/dialog' }
            ]
          },
        ]
      },
      {
        text: '<div style="display: flex;align-items: center;">' +
            '<img src="/sidebar/guidelines.svg" />' +
            '<p style="margin-left: 0.3vw;">社区准则</p></div>',
      },
      {
        text: '<div style="display: flex;align-items: center;">' +
            '<img src="/sidebar/security-strategy.svg" />' +
            '<p style="margin-left: 0.3vw;">安全策略</p></div>',
      },
      {
        text: '<div style="margin-top: 0.5vw;">' +
            '<a href="https://github.com/jsrac/qionglou/blob/main/LICENSE"><' +
            'img src="/sidebar/opensource.svg" /></a>' +
            '<p style="color:lightgrey;margin-top: 0.5vw;text-align: left;">' +
            'Copyright (c) 2023 <a href="https://github.com/jsrac/qionglou/graphs/contributors">' +
            'Open Source Contributors</a></p></div>'
      }
    ]
  },
})