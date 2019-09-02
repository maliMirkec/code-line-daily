// Returns random line
// Link structure: https://cld.silvestar.codes/get-random-line
const lines = require('../data/lines.json')

function randomize (min, max) {
  const mmin = Math.ceil(min)
  const mmax = Math.floor(max)
  return Math.floor(Math.random() * (mmax - mmin)) + mmin
}

exports.handler = function (event, context, callback) {
  const rand = randomize(0, lines.list.length - 1)

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(lines.list[rand])
  })
}
