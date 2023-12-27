import { version } from './package.json'
import type { Plugin, App } from '@vue/runtime-core'

export const install = (components: Plugin[] = []) => {
  const install = (app: App) => {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value)
    })
    return app
  }

  return {
    install,
    version
  }
}
