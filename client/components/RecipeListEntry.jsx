import React from 'react';
import PropTypes from 'prop-types';

const RecipeListEntry = ({ recipe, onCurrentRecipeChange }) => {
  const { id, label, image } = recipe;
  return (
    <div
      className="recipe-list-entry"
      onClick={() => {
        onCurrentRecipeChange(id);
      }}
      key={id}
    >
      <div className="media-left">
        <img className="media-object" src={image} alt="" />
      </div>
      <div className="media-body">
        <div className="recipe-list-entry-name">
          {label}
        </div>
      </div>
    </div>
  );
};

RecipeListEntry.propTypes = {
  recipe: PropTypes.object.isRequired,
  onCurrentRecipeChange: PropTypes.func.isRequired,
};

export default RecipeListEntry;
