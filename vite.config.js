import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

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
    })
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
      output: [
        {
          format: 'cjs',
          exports: 'named',
          dir: 'dist/lib',
          sourcemap: false,
          entryFileNames: 'index.js',
          chunkFileNames: '[name].js',
          namespaceToStringTag: true,
          inlineDynamicImports: false,
          manualChunks: undefined,
          preserveModules: true
        },
        {
          format: 'es',
          dir: 'dist/es',
          exports: 'named',
          sourcemap: false,
          entryFileNames: '[name].js',
          preserveModules: true,
          inlineDynamicImports: false
        },
        {
          format: 'umd',
          exports: 'named',
          name: 'qionglou',
          sourcemap: false,
          dir: 'dist',
          entryFileNames: 'index.umd.js',
          chunkFileNames: '[name].js',
          namespaceToStringTag: true,
          manualChunks: undefined,
          inlineDynamicImports: false,
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
})
