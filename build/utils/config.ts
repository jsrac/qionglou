import path from 'path'
import { outputPath, projectRoot } from './paths'
import type { ModuleFormat, OutputOptions } from 'rollup'

type BuildConfigType = {
  themeConfig: {
    input: string
    output: string
  }
  packagesConfig: {
    input: string
    output: string
  }
}

export const buildPathConfig: BuildConfigType = {
  themeConfig: {
    input: path.resolve(projectRoot, 'packages/themes'),
    output: path.resolve(outputPath, 'themes')
  },
  packagesConfig: {
    input: path.resolve(projectRoot, 'packages/components'),
    output: path.resolve(outputPath, 'components')
  },
} as const

export const modules = ['esm', 'cjs'] as const
export type Module = (typeof modules)[number]

export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    name: string
    path: string
  }
  bundle: {
    path: string
  }
}

// 重写打包配置方案
export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(outputPath, 'es')
    },
    bundle: {
      path: 'qionglou/es'
    }
  },
  cjs: {
    format: 'cjs',
    module: 'CommonJS',
    ext: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outputPath, 'lib')
    },
    bundle: {
      path: 'qionglou/lib'
    }
  }
}

export const buildCdnConfig: OutputOptions[] = [
  {
    format: 'umd',
    name: 'Qionglou',
    exports: 'named',
    file: path.resolve(outputPath, 'dist/index.cdn.js'),
    globals: {
      vue: 'Vue'
    },
    sourcemap: true
  },
  {
    format: 'esm',
    file: path.resolve(outputPath, 'dist/qionglou.esm.js'),
    sourcemap: true
  }
]

export type BuildConfigEntries = [Module, BuildInfo][]

export const buildConfigEntries = Object.entries(
  buildConfig
) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
