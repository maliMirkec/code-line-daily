// Returns latest line by language provided
// Link structure: https://cld.silvestar.codes/get-line-by-lang/:lang:
// Parameter :lang: - [required, case insensitive] Languages: HTML, CSS, JavaScript, PHP, Nodejs
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
  const path = event.path.split('get-line-by-lang')

  const lang = path[1].replace('/', '')

  const response = lines.list.find(
    line => line.language.toLowerCase() === lang.toLowerCase()
  )

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response || [])
  })
}
