import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  mode: 'production',
  server: {
    host: true
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'packages',
      outputDir: ['dist/types', 'dist/types'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: 'tsconfig.web.json'
    })
  ],
  build: {
    target: 'modules',
    minify: true,
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'packages/qionglou/index.ts'),
      name: 'qionglou'
    },
    rollupOptions: {
      external: ['vue'],
      input: resolve(__dirname, 'packages/qionglou/index.ts'),
      output: {
        entryFileNames: '[name].d.ts',
        chunkFileNames: '[name].d.ts',
        format: 'es'
      }
    }
  }
})
