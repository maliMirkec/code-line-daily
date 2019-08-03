const { src, dest, watch } = require('gulp')

const { helpers } = require('./helpers')

// Will process font files, too
function adminStart () {
  return src(helpers.trim(`${helpers.source()}/${global.config.cms.adminSrc}/**/*`))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.cms.adminDist}`)))
}

// Will process font files, too
function commitStart () {
  return src(helpers.trim(`${helpers.source()}/${global.config.cms.commitSrc}/**/*`))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.cms.commitDist}`)))
}

// When font is changed, it will process font file, too
function adminListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.cms.src}/**/*`), global.config.watchConfig, adminStart, global.bs.reload)
}

// When font is changed, it will process font file, too
function commitListen () {
  return watch(helpers.trim(`${helpers.source()}/${global.config.cms.src}/**/*`), global.config.watchConfig, commitStart, global.bs.reload)
}

exports.cms = {
  adminStart,
  adminListen,
  commitStart,
  commitListen
}
