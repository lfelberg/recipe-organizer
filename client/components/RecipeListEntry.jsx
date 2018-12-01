import React from 'react';
import PropTypes from 'prop-types';

const RecipeListEntry = ({ recipe, onCurrentRecipeChange }) => {
  const { name, imageURL } = recipe;
  return (
    <div
      className="recipe-list-entry media"
      onClick={() => {
        onCurrentRecipeChange(name);
      }}
      key={name}
    >
      <div className="media-left media-middle">
        <img className="media-object" src={imageURL} alt="" />
      </div>
      <div className="media-body">
        <div className="recipe-list-entry-name">
          {name}
        </div>
      </div>
    </div>
  );
};

RecipeListEntry.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  onCurrentRecipeChange: React.PropTypes.func.isRequired,
};

export default RecipeListEntry;
