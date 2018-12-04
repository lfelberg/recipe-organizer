const { Recipe } = require('../models/recipe');

const getRecipes = ({ keyword }) => (
  Recipe.find({ keyword }).exec()
);

const addRecipes = ({ recipes, keyword }) => {
  const recipeDocs = recipes.map(rec => (new Recipe({ ...rec, keyword })));
  return Recipe.insertMany(recipeDocs);
};

module.exports = {
  getRecipes,
  addRecipes,
};
