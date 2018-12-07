import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import { updateSession } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, error: state.session.error });

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleChange: session => dispatch(updateSession(session)),
  }
);

const RecipeListContainer = connect(mapStateToProps, mapDispatchToProps)(RecipeList);
export default RecipeListContainer;
