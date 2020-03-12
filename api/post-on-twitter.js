// Posts the latest line on Twitter
// Link structure: https://cld.silvestar.codes/post-on-twitter:
const Twitter = require('twitter');
const lines = require('./lines.json');

lines.list.sort((a, b) => {
  const aa = new Date(a.date);
  const bb = new Date(b.date);

  if (aa > bb) {
    return -1;
  }

  if (aa < bb) {
    return 1;
  }

  return 0;
});

exports.handler = function (event, context, callback) {
  const ddate = new Date();

  const lline = lines.list.find(
    (line) => new Date(line.date) <= ddate,
  );

  const client = new Twitter({
    consumer_key: process.env.CONSUMER_API_KEY,
    consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

  const paramsUpdated = {
    status: `Did you know of this line of code:
${lline.line}

${lline.note}

See more lines here: https://cld.silvestar.codes/line/${lline.date}
#loc #cld #codelinedaily #${lline.language}`,
  };

  const paramsTimeline = {
    screen_name: 'CodeLineDaily',
    count: 10,
  };


  client.get('statuses/user_timeline', paramsTimeline)
    .then((tweets) => {
      let foundTweet = false;
      let cbBody = {};

      tweets.forEach((tweet) => {
        if (tweet.text.indexOf(lline.line) !== -1) {
          foundTweet = tweet;
        }
      });

      if (foundTweet) {
        cbBody = {
          message: 'Tweet already posted.',
          tweet: foundTweet,
        };

        callback(null, {
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          statusCode: 200,
          body: JSON.stringify(cbBody || []),
        });
      } else {
        client.post('statuses/update', paramsUpdated)
          .then((tweet) => {
            cbBody = {
              message: 'Tweet posted successfully.',
              tweet,
            };

            callback(null, {
              headers: {
                'Access-Control-Allow-Origin': '*'
              },
              statusCode: 200,
              body: JSON.stringify(tweet || []),
            });
          })
          .catch((error) => {
            throw error;
          });
      }
    })
    .catch((error) => {
      throw error;
    });
};
