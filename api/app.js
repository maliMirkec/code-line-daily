const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
// const Twitter = require('twitter');
const lines = require('./lines.json');

const app = express();

const router = express.Router();

router.use(compression());

const routerPath = process.env.NODE_ENV === 'dev' ? `/` : `/.netlify/functions/`

app.use(bodyParser);

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

// function randomize(min, max) {
//   const mmin = Math.ceil(min);
//   const mmax = Math.floor(max);
//   return Math.floor(Math.random() * (mmax - mmin)) + mmin;
// }

// Returns every line
// Link structure: https://cld.silvestar.codes/get-all-lines
app.get('/get-all-lines', (res, req) => {
  console.log(req);

  res.json(lines.list);
});

// Returns latest line to the date provided
// Link structure: https://cld.silvestar.codes/get-line-by-date/:date:
// Parameter :date: - [required] Date in format YYYY-MM-DD
// app.get('/get-line-by-date/:date', (res, req) => {
//   const [date] = req.params;

//   const ddate = new Date(date);

//   const response = lines.list.find((line) => new Date(line.date) <= ddate);

//   res.json(response || []);
// });

// // Returns latest line by language provided
// // Link structure: https://cld.silvestar.codes/get-line-by-lang/:lang:
// // Parameter :lang: - [required, case insensitive] Languages: HTML, CSS, JavaScript, PHP, Nodejs
// app.get('/get-line-by-lang/:lang', (res, req) => {
//   const [lang] = req.params;

//   const response = lines.list.find((line) => line.language.toLowerCase() === lang.toLowerCase());

//   res.json(response || []);
// });

// // Returns every line by language provided
// // Link structure: https://cld.silvestar.codes/get-lines-by-lang/:lang:
// // Parameter :lang: - [required, case insensitive] Languages: HTML, CSS, JavaScript, PHP, Nodejs
// app.get('/get-lines-by-lang/:lang', (res, req) => {
//   const [lang] = req.params;

//   const response = lines.list.filter(line => line.language.toLowerCase() === lang.split('/')[0].oLowerCase())

//   res.json(response);
// });

// // Returns random line
// // Link structure: https://cld.silvestar.codes/get-random-line
// app.get('/get-random-line', (res, req) => {
//   const rand = randomize(0, lines.list.length - 1)

//   res.json(rand);
// });

// // Posts the latest line on Twitter
// // Link structure: https://cld.silvestar.codes/post-on-twitter
// app.get('/post-on-twitter', (res, req) => {
//   const ddate = new Date();

//   const lline = lines.list.find(
//     (line) => new Date(line.date) <= ddate,
//   );

//   const client = new Twitter({
//     consumer_key: process.env.CONSUMER_API_KEY,
//     consumer_secret: process.env.CONSUMER_API_SECRET_KEY,
//     access_token_key: process.env.ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.ACCESS_TOKEN_SECRET,
//   });

//   const paramsUpdated = {
//     status: `Did you know of this line of code:
// ${lline.line}

// ${lline.note}

// See more lines here: https://cld.silvestar.codes/line/${lline.date}
// #loc #cld #codelinedaily #${lline.language}`,
//   };

//   const paramsTimeline = {
//     screen_name: 'CodeLineDaily',
//     count: 10,
//   };

//   client.get('statuses/user_timeline', paramsTimeline)
//     .then((tweets) => {
//       let foundTweet = false;
//       let cbBody = {};

//       tweets.forEach((tweet) => {
//         if (tweet.text.indexOf(lline.line) !== -1) {
//           foundTweet = tweet;
//         }
//       });

//       if (foundTweet) {
//         cbBody = {
//           message: 'Tweet already posted.',
//           tweet: foundTweet,
//         };

//         res.json(cbBody || []);
//       } else {
//         client.post('statuses/update', paramsUpdated)
//           .then((tweet) => {
//             cbBody = {
//               message: 'Tweet posted successfully.',
//               tweet,
//             };

//             res.json(tweet || []);
//           })
//           .catch((error) => {
//             throw error;
//           });
//       }
//     })
//     .catch((error) => {
//       throw error;
//     });
//   const rand = randomize(0, lines.list.length - 1)

//   res.json(rand);
// });

app.use(routerPath, router);
router.use(cors());

module.exports = app;
module.exports.handler = serverless(app);
