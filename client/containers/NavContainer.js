import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { updateSession } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, error: state.session.error });

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleChange: session => dispatch(updateSession(session)),
  }
);

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
export default NavContainer;
