const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  id: String,
  keyword: String,
  image: String,
  password: String,
  label: String,
  shareAs: String,
  source: String,
  uri: String,
  url: String,
  calories: Number,
  totalTime: Number,
  totalWeight: Number,
  yield: Number,
  cautions: [String],
  ingredientLines: [String],
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = { Recipe, recipeSchema };
