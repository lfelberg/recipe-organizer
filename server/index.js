require('dotenv').config();
const path = require('path');
const https = require('https');
const express = require('express');
const uuid = require('uuid/v4');
const session = require('express-session');

const port = process.env.PORT || 3000;
const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '../public')));

// add & configure middleware
app.use(session({
  genid: () => uuid(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get('/api/recipes', (req, res) => {
  const { query } = req;
  let results = '';
  let url = process.env.EDAMAM_URL;
  url += `?q=${query.q}&app_id=${process.env.EDAMAM_APP}&app_key=${process.env.EDAMAM_KEY}`;
  https.get(url, (edam) => {
    let resData = '';
    edam.on('data', (data) => { resData += data; });
    edam.on('end', () => {
      results = JSON.parse(resData).hits;
      res.send(results);
    });
  }).on('error', (err) => { console.log(`Error: ${err.message}`); });
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
