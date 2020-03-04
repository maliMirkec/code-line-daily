'use strict';

const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const Twitter = require('twitter');

const lines = require('./lines.json');

const app = express();
const router = express.Router();

router.use(compression());

function randomize(min, max) {
  const mmin = Math.ceil(min);
  const mmax = Math.floor(max);
  return Math.floor(Math.random() * (mmax - mmin)) + mmin;
}

// Sort lines by date
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

// Returns every line
// Link structure: https://cld.silvestar.codes/get-all-lines
router.get('/get-all-lines', (req, res) => {
  res.json(lines.list);
});

// Returns latest line to the date provided
// Link structure: https://cld.silvestar.codes/get-line-by-date/:date:
// Parameter :date: - [required] Date in format YYYY-MM-DD
router.get('/get-line-by-date/:date', (req, res) => {
  const { date } = req.params;

  const ddate = new Date(date);

  const response = lines.list.find((line) => new Date(line.date) <= ddate);

  res.json(response || []);
});

// Returns latest line by language provided
// Link structure: https://cld.silvestar.codes/get-line-by-lang/:lang:
// Parameter :lang: - [required, case insensitive] Languages: HTML, CSS, JavaScript, PHP, Nodejs
router.get('/get-line-by-lang/:lang', (req, res) => {
  const { lang } = req.params;

  const response = lines.list.find((line) => line.language.toLowerCase() === lang.toLowerCase());

  res.json(response || []);
});

// Returns every line by language provided
// Link structure: https://cld.silvestar.codes/get-lines-by-lang/:lang:
// Parameter :lang: - [required, case insensitive] Languages: HTML, CSS, JavaScript, PHP, Nodejs
router.get('/get-lines-by-lang/:lang', (req, res) => {
  const { lang } = req.params;

  const response = lines.list.filter((line) => line.language.toLowerCase() === lang.toLowerCase());

  res.json(response);
});

// Returns random line
// Link structure: https://cld.silvestar.codes/get-random-line
router.get('/get-random-line', (req, res) => {
  const rand = randomize(0, lines.list.length - 1);

  res.json(lines.list[rand]);
});

// Posts the latest line on Twitter
// Link structure: https://cld.silvestar.codes/post-on-twitter:
router.get('/post-on-twitter', (req, res) => {
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

        res.json(cbBody || []);
      } else {
        client.post('statuses/update', paramsUpdated)
          .then((tweet) => {
            cbBody = {
              message: 'Tweet posted successfully.',
              tweet,
            };

            res.json(tweet || []);
          })
          .catch((error) => {
            throw error;
          });
      }
    })
    .catch((error) => {
      throw error;
    });
});

router.use(cors());

const routerPath = process.env.NODE_ENV === 'dev' ? '/cld/' : '/.netlify/functions/cld/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(routerPath, router);

// Export lambda handler
module.exports = app;
module.exports.handler = serverless(app);
