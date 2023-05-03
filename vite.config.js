import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    dts({
      staticImport: true,
      outputDir: ['./dist/lib', './dist/es'],
      include: ['./packages/qionglou'],
      afterBuild: () => {
        // 将固定文件复制到dist目录
        const files = [
          { input: './README.md', output: 'dist/README.md' },
          {
            input: './packages/qionglou/package.json',
            output: 'dist/package.json'
          },
          { input: './LICENSE', output: 'dist/LICENSE' }
        ]

        files.forEach((file) => {
          copyFileSync(file.input, file.output)
        })
      }
    }),
    terser()
  ],
  build: {
    target: 'modules',
    minify: true,
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'packages/qionglou/index.js'),
      name: 'qionglou'
    },
    rollupOptions: {
      external: ['vue'],
      input: resolve(__dirname, 'packages/qionglou/index.js'),
      output: [
        {
          format: 'umd',
          dir: 'dist/dist',
          exports: 'named',
          name: 'qionglou',
          entryFileNames: 'index.umd.js',
          chunkFileNames: '[name].js',
          generatedCode: { symbols: true },
          inlineDynamicImports: false,
          globals: { vue: 'Vue' }
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          exports: 'named',
          entryFileNames: '[name].js',
          generatedCode: { symbols: true },
          inlineDynamicImports: false,
          preserveModules: true
        },
        {
          format: 'es',
          dir: 'dist/es',
          exports: 'named',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          inlineDynamicImports: false
        }
      ]
    }
  }
})
