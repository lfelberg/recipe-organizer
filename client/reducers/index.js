import { combineReducers } from 'redux';
import { session, loggedIn } from './SessionReducer';
import entries from './EntriesReducer';
import {
  recipes,
  currentRecipe,
  recipesViewing,
  viewRecipe,
  showMyRecipes,
  recentAdded,
} from './RecipesReducer';

const rootReducer = combineReducers({
  entries,
  session,
  loggedIn,
  recipes,
  currentRecipe,
  recipesViewing,
  viewRecipe,
  showMyRecipes,
  recentAdded,
});

export default rootReducer;
