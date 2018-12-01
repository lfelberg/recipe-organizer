import React from 'react';
import PropTypes from 'prop-types';

const StepsListEntry = props => (<li>{props.step}</li>);

StepsListEntry.propTypes = {
  step: React.PropTypes.string.isRequired,
};

export default StepsListEntry;
