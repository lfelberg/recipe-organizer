import React from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './ingredientsList';

const RecipeViewer = ({ recipe, handleAdd }) => {
  const {
    label,
    image,
    url,
    id,
  } = recipe;

  return (
    <div className="recipe-viewer-details">
      <div className="recipe-pic">
        <img className="recipe-viewer-image" src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{label}</h3>
        </a>
      </div>
      <IngredientsList ingredients={recipe.ingredientLines} />
      <button
        type="button"
        className="btn hidden-sm-down"
        onClick={() => handleAdd(id)}
      >
        <span className="glyphicon glyphicon-plus" />
      </button>
    </div>
  );
};

RecipeViewer.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default RecipeViewer;
