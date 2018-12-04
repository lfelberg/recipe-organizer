const User = require('../models/user.js');

const findUserAndValidate = ({ username, password }) => (
  User.findOne({ username }).exec()
    .then((found) => {
      console.log('found', found);
      if (found === null) {
        return 'User does not exist';
      }

      if (found.password !== password) {
        return 'Username/password incorrect';
      }

      delete found.password;
      return found;
    })
);

const addUser = ({ username, password }) => (
  User.find({ username }).exec()
    .then((found) => {
      if (found.length === 0) {
        const userNew = new User({ username, password });
        return userNew.save();
      }
      return 'User already exists';
    })
);

// CRUD recipes by user
const getUserRecipes = ({ username }) => User.findOne({ username }).exec();

const addUserRecipe = ({ username, recipes }) => (
  User.findOneAndUpdate({ username }, { recipes }).exec()
);

module.exports = {
  findUserAndValidate,
  addUser,
  addUserRecipe,
  getUserRecipes,
};
