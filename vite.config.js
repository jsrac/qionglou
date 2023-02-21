import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
      include: ['packages/qionglou']
    })
  ],
  build: {
    target: 'modules',
    minify: false,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'packages/qionglou/index.js'),
      name: 'qionglou'
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          exports: 'named',
          sourcemap: false,
          entryFileNames: '[name].js',
          preserveModules: true,
          inlineDynamicImports: false
        }
      ]
    }
  }
})
