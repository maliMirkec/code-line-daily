// Returns every line
// Link structure: https://cld.silvestar.codes/get-all-lines
const lines = require('../data/lines.json')

lines.list.sort((a, b) => {
  const aa = new Date(a.date)
  const bb = new Date(b.date)

  if (aa > bb) {
    return -1
  }

  if (aa < bb) {
    return 1
  }

  return 0
})

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(lines.list)
  })
}
