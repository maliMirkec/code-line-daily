const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const lines = require('./lines.json');

const app = express();

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

// Returns every line
// Link structure: https://cld.silvestar.codes/get-all-lines
app.get('/get-all-lines', (res, req) => {
  console.log(req);

  res.json(lines.list);
});

// Returns latest line to the date provided
// Link structure: https://cld.silvestar.codes/get-line-by-date/:date:
// Parameter :date: - [required] Date in format YYYY-MM-DD
app.get('/get-all-lines/:date', (res, req) => {
  const [date] = req.params;

  const ddate = new Date(date);

  const response = lines.list.find((line) => new Date(line.date) <= ddate);

  res.json(response || []);
});

module.exports.handler = serverless(app);
