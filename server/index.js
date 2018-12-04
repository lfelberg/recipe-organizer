require('dotenv').config();
const path = require('path');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const db = require('../database/index');
const {
  findUserAndValidate,
  addUser,
} = require('../database/controllers/user');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`incoming ${req.method} from ${req.path}`);
  next();
});

// Static files
app.use(express.static(path.resolve(__dirname, '../public')));

// routes
app.use('/api/users/:username', user);

app.post('/login', (req, res) => {
  findUserAndValidate(req.body)
    .then((data) => {
      res.status(200).send({ data });
    });
});

app.post('/signup', (req, res) => {
  addUser(req.body)
    .then((data) => {
      res.status(200).send({ data });
    });
});


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
