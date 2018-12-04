const express = require('express');
const {
  addUserRecipe,
  getUserRecipes,
} = require('../../database/controllers/user');

const userRouter = express.Router({ mergeParams: true });

userRouter.get('/recipes', (req, res) => {
  getUserRecipes(req.params)
    .then((query) => {
      res.status(200).send({ data: query.recipes });
    });
});

userRouter.post('/recipes', (req, res) => {
  console.log('incoming from client', req.body);
  const { username } = req.params;
  addUserRecipe({ recipes: req.body, username })
    .then((data) => {
      res.status(200).send({ data });
    });
});

module.exports = userRouter;
