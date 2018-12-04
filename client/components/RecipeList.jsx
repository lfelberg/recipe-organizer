import React from 'react';
import PropTypes from 'prop-types';
import RecipeListEntry from './RecipeListEntry';

const RecipeList = ({ recipes, onCurrentRecipeChange }) => {
  const recipeListEntries = recipes.map(recipe => (
    <RecipeListEntry
      recipe={recipe}
      key={recipe.id}
      onCurrentRecipeChange={onCurrentRecipeChange}
    />
  ));

  if (recipeListEntries.length === 0) {
    return (<h1>Please add some recipes!</h1>);
  }

  return (
    <div className="recipe-list">
      {recipeListEntries}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onCurrentRecipeChange: PropTypes.func.isRequired,
};

export default RecipeList;
