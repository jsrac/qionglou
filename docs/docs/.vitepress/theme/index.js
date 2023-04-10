import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  // ...DefaultTheme,
  Layout: {
    ...DefaultTheme.Layout,
  },
  enhanceApp({ app }) {
    // ...
  }
}
