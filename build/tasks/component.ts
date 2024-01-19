import glob from 'fast-glob'
import { pkgRoot, projectEntry } from '../utils/paths'
import { rollup } from 'rollup'
import type { OutputOptions } from 'rollup'
import { buildCdnConfig, buildConfigEntries } from '../utils/config'
import { rollupBuildPlugin } from '../utils/rollup'
import { resolve } from 'path'

// 排除
export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__test__', '__mock__']
  return files.filter(
    (path) => !excludes.some((exclude) => path.includes(exclude))
  )
}

// 构建package目录
export const buildPackage = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  )

  const bundle = await rollup({
    input: input,
    external: [
      'vue',
      /\.scss$/,
      /\.css$/,
      /\.svg$/,
      /\.png$/,
      /\.jpg$/,
      /\.jpeg$/,
      /\.gif$/,
      /\.webp$/,
      /\.ico$/,
      /\.md$/
    ],
    // external: await generateExternal("node"),
    plugins: rollupBuildPlugin(),
    treeshake: false
  })

  const options = buildConfigEntries.map(
    ([module, config]): OutputOptions => ({
      format: config.format,
      dir: config.output.path,
      exports: module === 'cjs' ? 'named' : undefined,
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: pkgRoot,
      entryFileNames: `[name].${config.ext}`
    })
  )

  return Promise.all(options.map((option) => bundle.write(option)))
}

// 打包成cdn
export const buildCdn = async () => {
  const bundle = await rollup({
    input: resolve(projectEntry, 'index.ts'),
    plugins: rollupBuildPlugin(true),
    external: (id) => {
      if (id.startsWith('vue')) {
        return true
      }
    },
    // external: await generateExternal("cdn"),
    treeshake: false
  })
  return Promise.all(buildCdnConfig.map((option) => bundle.write(option)))
}
