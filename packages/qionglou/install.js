import { version } from './package.json'

export const install = (components) => {
  const install = (app) => {
    components.forEach((component) => {
      app.use(component)
    })
  }

  return {
    install,
    version
  }
}
