const https = require('https');
const express = require('express');
const {
  addRecipes,
  getRecipes,
} = require('../../database/controllers/recipe');

const recipeRouter = express.Router({ mergeParams: true });

recipeRouter.get('/', (req, res) => {
  const { query } = req;
  const keyword = query.q.toLowerCase();
  getRecipes({ keyword })
    .then((found) => {
      if (found.length !== 0) {
        res.status(200).send({ data: found });
        return;
      }

      let results = '';
      let url = process.env.EDAMAM_URL;
      url += `?q=${keyword}&app_id=${process.env.EDAMAM_APP}`;
      url += `&app_key=${process.env.EDAMAM_KEY}`;
      url += '&from=0&to=25';
      https.get(url, (edam) => {
        let resData = '';
        edam.on('data', (data) => { resData += data; });
        edam.on('end', () => {
          results = JSON.parse(resData).hits;
          const recipes = results.map(result => result.recipe);
          addRecipes({ recipes, keyword })
            .then(data => res.status(200).send({ data }));
        });
      }).on('error', err => `Error: ${err.message}`);
    });
});

module.exports = recipeRouter;
