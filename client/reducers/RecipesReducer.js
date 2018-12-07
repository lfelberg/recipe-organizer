import cloneDeep from 'lodash.clonedeep';

const recipes = (state = null, action) => {
  if (action.type === 'UPDATE_RECIPES') {
    return cloneDeep(action.payload);
  }
  return state;
};

const currentRecipe = (state = null, action) => {
  if (action.type === 'UPDATE_CURRENTRECIPE') {
    return cloneDeep(action.payload);
  }
  return state;
};

const recipesViewing = (state = null, action) => {
  if (action.type === 'UPDATE_RECIPESVIEWING') {
    return cloneDeep(action.payload);
  }
  return state;
};

const showMyRecipes = (state = null, action) => {
  if (action.type === 'SET_SHOWMYRECIPES') {
    return cloneDeep(action.payload);
  }
  return state;
};

const recentAdded = (state = null, action) => {
  if (action.type === 'SET_RECENTADDED') {
    return action.payload;
  }
  return state;
};

const viewRecipe = (state = null, action) => {
  if (action.type === 'SET_VIEWRECIPE') {
    return action.payload;
  }
  return state;
};

export {
  recipes,
  currentRecipe,
  recipesViewing,
  viewRecipe,
  showMyRecipes,
  recentAdded,
};
