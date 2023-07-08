import { parallel, series } from 'gulp'
import { run, withTaskName } from './utils'
import { buildTheme } from './tasks/theme'
import { buildCdn, buildPackage } from './tasks/component'

export default series(
  withTaskName('clean', () => run('rimraf dist')),
  buildTheme,
  parallel(buildPackage, buildCdn)
)
