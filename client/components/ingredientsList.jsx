import React from 'react';
import PropTypes from 'prop-types';
import IngredientsListEntry from './ingredientsListEntry';

const IngredientsList = (props) => {
  const { ingredients } = props;
  const ingredient = ingredients.map(i => <IngredientsListEntry item={i} key={i.name} />);
  return (
    <div className="recipe-viewer">
      <ul>
        {ingredient}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
};

export default IngredientsList;
