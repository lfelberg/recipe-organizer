import React from 'react';
import PropTypes from 'prop-types';

const IngredientsListEntry = ({ item }) => {
  const { quantity, name } = item;
  const ingredient = `${quantity} ${name}`;
  return (<li>{ingredient}</li>);
};

IngredientsListEntry.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientsListEntry;
