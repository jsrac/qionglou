import * as components from '@qionglou/components'

const install = (app) => {
  // 注册组件
  Object.values(components).forEach((component) => {
      app.component(component.name, component)
  })

  return app
}

export default {
  install,
}
