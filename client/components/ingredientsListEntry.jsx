import React from 'react';
import PropTypes from 'prop-types';

const IngredientsListEntry = ({ ingredient }) => (<li>{ingredient}</li>);

IngredientsListEntry.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default IngredientsListEntry;
