import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './index.dark.css'

export default {
  ...DefaultTheme,
  Layout: {
    ...DefaultTheme.Layout,
  },
  enhanceApp({ app }) {
    // ...
  }
}
