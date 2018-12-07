import { connect } from 'react-redux';
import RecipeViewer from '../components/RecipeViewer';
import { updateSession } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, error: state.session.error });

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleChange: session => dispatch(updateSession(session)),
  }
);

const RecipeViewerContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeViewer);
export default RecipeViewerContainer;
