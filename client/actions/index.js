export const toggleLoggedIn = loggedIn => ({ type: 'SET_LOGGEDIN', payload: loggedIn });
export const toggleShowMyRecipes = showMyRecipes => ({ type: 'SET_SHOWMYRECIPES', payload: showMyRecipes });
export const toggleRecentAdded = recentAdded => ({ type: 'SET_RECENTADDED', payload: recentAdded });
export const toggleViewRecipe = viewRecipe => ({ type: 'SET_VIEWRECIPE', payload: viewRecipe });

export const updateEntries = entries => ({ type: 'UPDATE_ENTRIES', payload: entries });
export const updateRecipes = recipes => ({ type: 'UPDATE_RECIPES', payload: recipes });
export const updateCurrentRecipe = currentRecipe => ({ type: 'UPDATE_CURRENTRECIPES', payload: currentRecipe });
export const updaterecipesViewing = recipesViewing => ({ type: 'UPDATE_RECIPESVIEWING', payload: recipesViewing });
export const updateSession = session => ({ type: 'UPDATE_SESSION', payload: session });
