import React from 'react';
import PropTypes from 'prop-types';
import RecipeListEntry from './RecipeListEntry';

const RecipeList = (props) => {
  const { recipes } = props;
  const recipeListEntries = recipes.map(recipe => (
    <RecipeListEntry
      recipe={recipe}
      key={recipe.name}
      onCurrentRecipeChange={props.onCurrentRecipeChange}
    />
  ));

  return (
    <div className="recipe-list">
      {recipeListEntries}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: React.PropTypes.array.isRequired,
  onCurrentRecipeChange: React.PropTypes.func.isRequired,
};

export default RecipeList;
