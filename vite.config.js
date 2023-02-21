import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
    dts({
      staticImport: true,
      tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
      include: ['./packages/qionglou']
    })
  ],
  build: {
    target: 'modules',
    minify: true,
    outDir: resolve(__dirname, 'dist'),
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
          name: 'qionglou',
          exports: 'named',
          sourcemap: false,
          entryFileNames: 'index.umd.js',
          chunkFileNames: '[name].js',
          namespaceToStringTag: true,
          manualChunks: undefined,
          inlineDynamicImports: false,
          globals: { vue: 'Vue' }
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: 'dist/lib',
          sourcemap: false,
          entryFileName: 'index.js',
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
        }
      ]
    }
  }
})
