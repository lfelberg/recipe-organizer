const mongoose = require('mongoose');
const { recipeSchema } = require('./recipe.js');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  recipes: [recipeSchema],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
