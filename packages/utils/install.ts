import type { App } from 'vue'

// 注册组件到全局
export const withInstall = (component: any) => {
  component.install = (app: any) => {
    app.component(component.name, component)
  }
  return component
}

// 注册方法到全局
export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as any).install = (app: App) => {
    app.config.globalProperties[name] = fn
  }

  return fn as T & { install: (app: App) => void }
}

export const withNoopInstall = <T>(component: T) => {
  // @ts-ignore
  component.install = (app: App) => {}
  return component
}