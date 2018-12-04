require('dotenv').config();
const path = require('path');
const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const recipe = require('./routes/recipe');
const utils = require('./lib/utils');
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
app.use('/api/recipes', recipe);

app.post('/login', (req, res) => {
  const { username } = req.body;
  let { password } = req.body;
  password = utils.createHash(password);
  findUserAndValidate({ username, password })
    .then((data) => {
      res.status(200).send({ data });
    });
});

app.post('/signup', (req, res) => {
  const { username } = req.body;
  let { password } = req.body;
  password = utils.createHash(password);
  addUser({ username, password })
    .then((data) => {
      res.status(200).send({ data });
    });
});


app.listen(port, () => {
  console.log(`listening at ${port}`);
});
