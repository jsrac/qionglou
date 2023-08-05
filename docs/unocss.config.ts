import { defineConfig } from 'unocss'

export default defineConfig({
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`]
})
