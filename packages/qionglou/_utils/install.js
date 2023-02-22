// 注册组件到全局
export const withInstall = (component) => {
  component.install = (app) => {
    app.component(component.name, component)
  }
  return component
}
