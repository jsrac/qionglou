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
      include: ['packages/components', 'packages/utils']
    })
  ],
  build: {
    target: 'modules',
    minify: false,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'packages/components/index.js'),
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
