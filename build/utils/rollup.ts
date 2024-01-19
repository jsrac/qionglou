import type { InputPluginOption } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import { resolve } from 'path'
import { projectEntry, projectRoot } from './paths'
import json from '@rollup/plugin-json'

const __defProp = Object.defineProperty
const __name = (target: any, value: any) =>
  __defProp(target, 'name', { value, configurable: true })
;(globalThis as any).__name = __name

export const epPackage = resolve(projectEntry, 'package.json')
export const epTsconfig = resolve(projectRoot, 'tsconfig.web.json')

/**
 * 获取package.json文件内容
 * @param pkgPath package.json路径
 * @returns package.json Object
 */
export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath)
}

/**
 * 查找package.json dependencies peerDependencies 配置
 * @param pkgPath package.json路径
 * @returns {dependencies:{...},peerDependencies:{...}}
 */
export const getPackageDependencies = (
  pkgPath: string
): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies)
  }
}

/**
 * 外部引入库标识，以防Rollup打包在一起
 * @param buildType 'node' | 'cdn'
 * @returns string[]
 */
export const generateExternal = async (buildType: 'node' | 'cdn') => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage)
  if (buildType === 'cdn') {
    return [...peerDependencies]
  }
  return [...dependencies, ...peerDependencies]
}

export const rollupBuildPlugin = (minify?: boolean): InputPluginOption => {
  return [
    vue({
      isProduction: false
    }),
    vueJsx(),
    image(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    json(),
    commonjs(),
    esbuild({
      target: 'es2019',
      minify,
      loaders: {
        '.vue': 'ts'
      },
      keepNames: true
    })
  ] as InputPluginOption
}
