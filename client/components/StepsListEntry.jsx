const StepsListEntry = props => (<li>{props.step}</li>);

StepsListEntry.propTypes = {
  step: React.PropTypes.string.isRequired,
};

export default StepsListEntry;
