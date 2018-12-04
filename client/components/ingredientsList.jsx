import React from 'react';
import PropTypes from 'prop-types';
import IngredientsListEntry from './ingredientsListEntry';

const IngredientsList = ({ ingredients }) => {
  const ingredientList = ingredients.map(i => <IngredientsListEntry ingredient={i} key={i} />);
  return (
    <div className="recipe-ingredient-list">
      <ul>
        {ingredientList}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;
