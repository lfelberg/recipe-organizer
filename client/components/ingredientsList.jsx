import React from 'react';
import PropTypes from 'prop-types';
import IngredientsListEntry from './ingredientsListEntry';

const IngredientsList = ({ ingredients }) => {
  const ingredient = ingredients.map(i => <IngredientsListEntry item={i} key={i.text} />);
  return (
    <div className="recipe-viewer">
      <ul>
        {ingredient}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;
