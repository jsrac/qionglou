import { resolve } from 'path'

// 项目根目录
export const projectRoot = resolve(__dirname, '..', '..')

// 输出目录
export const outputPath = resolve(projectRoot, 'dist')

export const pkgRoot = resolve(projectRoot, 'packages')

// 组件目录
export const compRoot = resolve(projectRoot, 'packages/components')

export const projectEntry = resolve(projectRoot, 'packages/qionglou')
