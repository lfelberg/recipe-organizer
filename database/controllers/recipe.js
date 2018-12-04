const { Recipe } = require('../models/recipe');

const getRecipes = query => Recipe.find(query).exec();

const addRecipes = ({ recipes, keyword }) => {
  const recipeDocs = recipes.map(rec => (new Recipe({ ...rec, keyword })));
  return Recipe.insertMany(recipeDocs);
};

module.exports = {
  getRecipes,
  addRecipes,
};
