import { version } from './package.json'

export const install = (components) => {
  const install = (app) => {
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
