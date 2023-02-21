import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    dts({
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
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
    visualizer()
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
          format: 'umd',
          dir: 'dist',
          exports: 'named',
          sourcemap: false,
          name: 'qionglou',
          entryFileNames: 'index.umd.js',
          assetFileNames: '[name].[ext]',
          chunkFileNames: '[name].js',
          generatedCode: { symbols: true },
          manualChunks: undefined,
          inlineDynamicImports: false,
          globals: { vue: 'Vue' }
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'index.js',
          assetFileNames: '[name].[ext]',
          chunkFileNames: '[name].js',
          generatedCode: { symbols: true },
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
          assetFileNames: '[name].[ext]',
          entryFileNames: '[name].js',
          preserveModules: true,
          inlineDynamicImports: false
        }
      ]
    }
  }
})
