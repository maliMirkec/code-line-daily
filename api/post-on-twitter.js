// Posts the latest line on Twitter
// Link structure: https://cld.silvestar.codes/post-on-twitter:
const Twitter = require('twitter')
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
  const ddate = new Date()

  const lline = lines.list.find(
    line => new Date(line.date) <= ddate
  )

  const client = new Twitter({
    consumer_key: process.env.CONSUMER_API_KEY,
    consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  const params = {
    status: `Did you know of this line of code:
${lline.line}

${lline.note}

See more lines here: https://cld.silvestar.codes/line/${lline.date}
#loc #cld #codelinedaily #${lline.language}`
  }

  client.post('statuses/update', params)
    .then((tweet) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(tweet || [])
      })
    })
    .catch((error) => {
      throw error
    })
}
