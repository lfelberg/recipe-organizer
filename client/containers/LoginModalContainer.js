import { connect } from 'react-redux';
import LoginModal from '../components/LoginModal';
import { updateSession } from '../actions/index';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, error: state.session.error });

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    ...ownProps,
    handleChange: session => dispatch(updateSession(session)),
  }
);

const LoginModalContainer = connect(mapStateToProps, mapDispatchToProps)(LoginModal);
export default LoginModalContainer;
