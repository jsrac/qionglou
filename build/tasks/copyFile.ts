import { copyFileSync } from 'fs'
import { projectRoot } from '../utils/paths'
import { resolve } from 'path'
import { parallel } from 'gulp'

const files = [
  {
    input: resolve(projectRoot, 'README.md'),
    output: resolve(projectRoot, 'dist/README.md')
  },
  {
    input: resolve(projectRoot, 'package.json'),
    output: resolve(projectRoot, 'dist/package.json')
  },
  {
    input: resolve(projectRoot, 'LICENSE'),
    output: resolve(projectRoot, 'dist/LICENSE')
  }
]

const copyFile = async () =>
  files.forEach((file) => {
    copyFileSync(file.input, file.output)
  })
export default parallel(copyFile)
