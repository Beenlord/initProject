const {src, dest, series, watch} = require('gulp')
const config = require('config')

// Compile
const pug = require('gulp-pug')
const sass = require('gulp-sass')(require('sass'))

// Concat
const concat = require('gulp-concat')
const rigger = require('gulp-rigger')

// Min's
const cssmin = require('gulp-cssmin')
const jsmin = require('gulp-jsmin')

// File management
const dirSync = require('gulp-directory-sync')
const ignore = require('gulp-ignore')
const rimraf = require('gulp-rimraf')

// Browser
const sync = require('browser-sync').create()

let layout = () => {
    return src(config.get('IndexPug'))
        .pipe(pug())
        .pipe(dest('./public'))
}

let style = () => {
    return src(config.get('IndexScss'))
        .pipe(sass())
        .pipe(cssmin())
        .pipe(dest('./public'))
}

let script = () => {
    return src(config.get('IndexJs'))
        .pipe(rigger())
        .pipe(jsmin())
        .pipe(dest('./public/scripts'))
}

console.log(config.get("ProjectPackages"));

let modules = () => {
    return src(config.get("ProjectPackages"))
        .pipe(concat('modules.js'))
        .pipe(jsmin())
        .pipe(dest('./public/scripts'))
}

let media = () => {
    return src(['./source/media'])
        .pipe(dirSync('./source/media', './public/media', {printSummary: true}))
}

// let clear = () => {
//     return del.sync('./public/index.html', {
//         force: true
//     })
// }

let clearAll = () => {
    return src([
        './public/*.html',
        './public/*.css',
        './public/scripts',
        './public/media',
        './node_modules',
    ])
        .pipe(ignore('./node_modules/gulp-rimraf'))
        .pipe(rimraf())
}

let browser = () => {
    sync.init({
        server: './public'
    })

    watch('./source/pug/**/*.pug', series(layout)).on('change', sync.reload)
    watch('./source/scss/**/*.scss', series(style)).on('change', sync.reload)
    watch('./source/js/**/*.js', series(script)).on('change', sync.reload)
    watch('./source/media/**/*.*', series(media)).on('change', sync.reload)
}

exports.compileLayout = layout
exports.compileStyle = style
exports.concatScrips = script
exports.mooveModules = modules

exports.mooveMedia = media

exports.clearAll = clearAll // Очистить проект *для переноса
// TODO:: exports.clear = clear // Очистить старый кеш проекта

exports.dev = series(media, layout, style, modules, script, browser)
exports.build = series(media, layout, style, modules, script)