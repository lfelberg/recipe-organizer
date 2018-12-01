import React from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './ingredientsList';
import StepsList from './stepsList';

const RecipeViewer = (props) => {
  const { name, imageURL } = props.recipe;
  return (
    <div className="recipe-viewer-details">
      <div className="recipe-viewer">
        <div className="recipe-pic">
          <img className="recipe-viewer-image" src={imageURL} alt={name} />
        </div>
        <h3>{name}</h3>
        <IngredientsList ingredients={props.recipe.ingredients} />
        <StepsList steps={props.recipe.steps} />
      </div>
    </div>
  );
};

RecipeViewer.propTypes = {
  recipe: React.PropTypes.object.isRequired,
};

export default RecipeViewer;
