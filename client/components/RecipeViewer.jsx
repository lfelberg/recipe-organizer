import React from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './ingredientsList';

const RecipeViewer = ({ recipe }) => {
  const { label, image } = recipe;
  return (
    <div className="recipe-viewer-details">
      <div className="recipe-viewer">
        <div className="recipe-pic">
          <img className="recipe-viewer-image" src={image} alt={label} />
        </div>
        <h3>{label}</h3>
        <IngredientsList ingredients={recipe.ingredients} />
      </div>
    </div>
  );
};

RecipeViewer.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeViewer;
