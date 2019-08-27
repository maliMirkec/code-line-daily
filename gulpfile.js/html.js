const { src, dest, watch } = require('gulp')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const path = require('path')
const pug = global.config.html.pug ? require('gulp-pug') : () => true
const data = global.config.html.pug ? require('gulp-data') : () => true
const htmlmin = global.config.html.minify ? require('gulp-htmlmin') : () => true
const htmllint = global.config.html.lint ? require('gulp-htmllint') : () => true
const inlineSource = global.config.html.inline ? require('gulp-inline-source') : () => true
const replace = global.config.html.pug ? require('gulp-replace') : () => true
const wait = require('gulp-wait')
const fs = global.config.html.inline ? require('fs') : () => true

const { helpers } = require('./helpers')

const htmlConfig = require('./.html.json')
const xmlConfig = require('./.xml.json')

const siteConfigs = [{
  name: 'site',
  path: helpers.trim(`${helpers.proot()}/data/site.json`)
}, {
  name: 'data',
  path: helpers.trim(`${helpers.proot()}/data/lines.json`)
}]

let thisPugConfigHTML = {}

if (global.config.html.pug) {
  thisPugConfigHTML = htmlConfig.pugConfig.basedir
    ? htmlConfig.pugConfig
    : Object.assign({}, htmlConfig.pugConfig, { basedir: helpers.trim(`${helpers.source()}/${global.config.html.src}/`) })
}

let thisHtmllintConfig = {}

if (global.config.html.lint) {
  thisHtmllintConfig = htmlConfig.htmllintConfig.config
    ? htmlConfig.htmllintConfig.config
    : Object.assign({}, htmlConfig.htmllintConfig, { config: `${helpers.proot()}.htmllintrc` })
}

let thisInlineConfigHTML = {}

if (global.config.html.inline) {
  thisInlineConfigHTML = htmlConfig.inlineConfig.rootpath
    ? htmlConfig.inlineConfig
    : Object.assign({}, htmlConfig.inlineConfig, { rootpath: path.resolve(helpers.dist()) })
}

const htmlSrc = global.config.html.pug
  ? [helpers.trim(`${helpers.source()}/${global.config.html.src}/**/*.pug`), helpers.trim(`!${helpers.source()}/${global.config.html.src}/_**/*.pug`), helpers.trim(`!${helpers.source()}/${global.config.html.src}/**/_**/*.pug`)]
  : helpers.trim(`${helpers.source()}/${global.config.html.src}/**/*.html`)

// Will process Pug files
function htmlStart () {
  return src(htmlSrc)
    .pipe(gulpif(global.config.html.pug, data(() => {
      const temp = {}

      siteConfigs.forEach((siteConfig) => {
        temp[siteConfig.name] = JSON.parse(fs.readFileSync(siteConfig.path))
      })

      return temp
    })))
    .pipe(gulpif(global.config.html.pug, pug(thisPugConfigHTML)))
    .pipe(gulpif(global.config.html.lint, htmllint(thisHtmllintConfig)))
    .pipe(wait(1000))
    .pipe(gulpif(global.config.html.inline, inlineSource(thisInlineConfigHTML)))
    .pipe(gulpif(global.config.html.minify, htmlmin(htmlConfig.htmlminConfig)))
    .pipe(rename(htmlConfig.renameConfig))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.html.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()))
}

// When Pug, md, or config file is changed, it will process Pug file, too
function htmlListen () {
  return watch([...siteConfigs.map(siteConfig => siteConfig.path), helpers.trim(`${helpers.source()}/${global.config.html.src}/**/*.pug`), helpers.trim(`${helpers.source()}/${global.config.html.src}/**/*.md`)], global.config.watchConfig, htmlStart)
}

// When Critical CSS file is changed, it will process HTML, too
function htmlListenCritical (cb) {
  watch(helpers.trim(`${helpers.dist()}/${global.config.css.dist}/*.critical.min.css`), global.config.watchConfig, htmlStart)

  cb()
}

let thisPugConfigXML = {}

if (global.config.html.pug) {
  thisPugConfigXML = xmlConfig.pugConfig.basedir
    ? xmlConfig.pugConfig
    : Object.assign({}, xmlConfig.pugConfig, { basedir: helpers.trim(`${helpers.source()}/${global.config.xml.src}/`) })
}

const xmlSrc = global.config.xml.pug
  ? [helpers.trim(`${helpers.source()}/${global.config.xml.src}/**/*.pug`), helpers.trim(`!${helpers.source()}/${global.config.xml.src}/_**/*.pug`), helpers.trim(`!${helpers.source()}/${global.config.xml.src}/**/_**/*.pug`)]
  : helpers.trim(`${helpers.source()}/${global.config.xml.src}/**/*.xml`)

// Will process Pug files
function xmlStart () {
  return src(xmlSrc)
    .pipe(gulpif(global.config.xml.pug, data(() => {
      const temp = {}

      siteConfigs.forEach((siteConfig) => {
        temp[siteConfig.name] = JSON.parse(fs.readFileSync(siteConfig.path))
      })

      return temp
    })))
    .pipe(gulpif(global.config.xml.pug, pug(thisPugConfigXML)))
    .pipe(wait(1000))
    .pipe(gulpif(global.config.xml.minify, htmlmin(xmlConfig.htmlminConfig)))
    .pipe(replace('div', 'link'))
    .pipe(rename(xmlConfig.renameConfig))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.xml.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()))
}

// When Pug, md, or config file is changed, it will process Pug file, too
function xmlListen () {
  return watch([...siteConfigs.map(siteConfig => siteConfig.path), helpers.trim(`${helpers.source()}/${global.config.xml.src}/**/*.pug`)], global.config.watchConfig, xmlStart)
}

exports.html = {
  htmlStart,
  xmlStart,
  htmlListen,
  xmlListen,
  htmlListenCritical
}
