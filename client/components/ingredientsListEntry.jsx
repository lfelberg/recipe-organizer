import React from 'react';
import PropTypes from 'prop-types';

const IngredientsListEntry = ({ item }) => {
  const { text } = item;
  return (<li>{text}</li>);
};

IngredientsListEntry.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientsListEntry;
