/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    plugins: [vue()],
    test: {
      environment: 'happy-dom',
      exclude: ['packages/qionglou/*'],
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  } as UserConfigExport
}
