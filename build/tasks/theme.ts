import gulpSass from 'gulp-sass'
import initialSass from 'sass'
import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import { dest, parallel, src } from 'gulp'
import path from 'path'
import { buildPathConfig } from '../utils/config'

const sass = gulpSass(initialSass)

const compile = () =>
  src(path.resolve(__dirname, `${buildPathConfig.themeConfig.input}/*.scss`))
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cleanCss())
    .pipe(dest(buildPathConfig.themeConfig.output))

export const buildTheme = parallel(compile)
