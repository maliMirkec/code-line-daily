const { src, dest, parallel } = require('gulp');
const critical = require('gulp-penthouse');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');

critical.DEBUG = process.env.NODE_ENV !== 'production';

const { helpers } = require('./helpers');

const criticalConfig = require('./.critical.json');
const cssConfig = require('./.css.json');

const thisCriticalConfig = { ...criticalConfig, temp: `${helpers.parse(criticalConfig.temp)}` };

// Will extract Critical CSS
function criticalStart(cb) {
  if (fs.existsSync(helpers.trim(`${thisCriticalConfig.temp}/${thisCriticalConfig.configs[0].settings.out}`))) {
    src(helpers.trim(`${thisCriticalConfig.temp}/*`))
      .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));

    return cb();
  }

  const files = [];

  thisCriticalConfig.configs.forEach((config) => {
    const thisSettings = { ...config.settings, out: helpers.trim(`/${config.settings.out}`) };

    files.push(helpers.trim(`${thisCriticalConfig.temp}/${thisSettings.out}`));

    const thisConfig = {
      ...config,
      src: helpers.trim(`${helpers.dist()}/${global.config.css.dist}/${config.src}`),
      settings: thisSettings,
    };

    src(thisConfig.src)
      .pipe(critical(thisConfig.settings))
      .pipe(dest(helpers.trim(`${thisCriticalConfig.temp}`)))
      .pipe(cleanCSS())
      .pipe(rename(cssConfig.renameConfig))
      .pipe(dest(helpers.trim(`${thisCriticalConfig.temp}`)))
      .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
  });

  const checkInterval = setInterval(() => {
    let checkFile = true;

    files.forEach((file) => {
      if (!fs.existsSync(file)) {
        checkFile = false;
      }
    });

    if (checkFile) {
      console.log('stop');

      clearInterval(checkInterval);
      cb();
    }
  }, 250);

  return checkInterval;
}

exports.critical = {
  criticalStart,
};
