const { src, dest, watch } = require('gulp')

const { helpers } = require('./helpers')

// Will process font files, too
function adminStart () {
  return src(helpers.trim(`${helpers.source()}/${global.config.cms.adminSrc}/**/*`))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.cms.adminDist}`)))
}

// Will process font files, too
function contributeStart () {
  return src(helpers.trim(`${helpers.source()}/${global.config.cms.contributeSrc}/**/*`))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.cms.contributeDist}`)))
}

// When font is changed, it will process font file, too
function adminListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.cms.src}/**/*`), global.config.watchConfig, adminStart, global.bs.reload)
}

// When font is changed, it will process font file, too
function contributeListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.cms.src}/**/*`), global.config.watchConfig, contributeStart, global.bs.reload)
}

exports.cms = {
  adminStart,
  adminListen,
  contributeStart,
  contributeListen
}
