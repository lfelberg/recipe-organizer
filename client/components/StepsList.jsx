import React from 'react';
import PropTypes from 'prop-types';
import StepsListEntry from './stepsListEntry';

const StepsList = (props) => {
  let { steps } = props;
  steps = steps.map(step => (<StepsListEntry step={step} key={step} />));
  return (
    <div className="step-viewer">
      <ol>
        {steps}
      </ol>
    </div>
  );
};

StepsList.propTypes = {
  steps: React.PropTypes.array.isRequired,
};

export default StepsList;
