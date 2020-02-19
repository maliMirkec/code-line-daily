// const gulp = require('gulp')
const del = require('del');

const { helpers } = require('./helpers');

// Will delete dist folder
function cleanStart() {
  return del(helpers.dist());
}

// Will delete dist folder
function cleanLines() {
  return del(helpers.trim(`${helpers.dist()}/${global.config.html.dist}/line/`));
}

exports.clean = {
  cleanStart,
  cleanLines,
};
