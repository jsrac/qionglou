import { version } from './package.json'

export const install = (components: any) => {
  const install = (app: any) => {
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
