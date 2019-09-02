// Returns latest line to the date provided
// Link structure: https://cld.silvestar.codes/get-line-by-date/:date:
// Parameter :date: - [required] Date in format YYYY-MM-DD
const lines = require('./lines.json')

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
  console.log('event.path', event.path)

  const path = event.path.split('get-line-by-date')

  console.log('path', path)

  const date = path[1].replace('/', '')

  console.log('date', date)

  const ddate = new Date(date)

  const response = lines.list.find(
    line => new Date(line.date) <= ddate
  )

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response || [])
  })
}
