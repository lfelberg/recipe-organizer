require('dotenv').config();
const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
