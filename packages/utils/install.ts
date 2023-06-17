// 注册组件到全局
export const withInstall = (component: any) => {
  component.install = (app: any) => {
    app.component(component.name, component)
  }
  return component
}
