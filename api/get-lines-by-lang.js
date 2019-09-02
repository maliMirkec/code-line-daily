// Returns every line by language provided
// Link structure: https://cld.silvestar.codes/get-lines-by-lang/:lang:
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
  console.log(event)

  const lang = event.path.replace('/get-lines-by-lang/', '')

  const response = lines.list.filter(line => line.language.toLowerCase() === lang.split('/')[0].toLowerCase())

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response)
  })
}
