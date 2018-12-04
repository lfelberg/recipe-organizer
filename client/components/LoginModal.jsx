import React from 'react';
import PropTypes from 'prop-types';

const LoginModal = ({
  handleSubmit,
  handleChange,
  error,
}) => (
  <div className="login-modal">
    <input
      className="form-control"
      type="text"
      placeholder="username"
      onChange={e => handleChange('username', e.target.value, 'session')}
    />
    <input
      className="form-control"
      type="password"
      placeholder="password"
      onChange={e => handleChange('password', e.target.value, 'session')}
    />
    <button
      type="button"
      className="btn hidden-sm-down"
      onClick={() => handleSubmit()}
    >
      Sign in
    </button>
    <button
      type="button"
      className="btn hidden-sm-down"
      onClick={() => handleSubmit(false)}
    >
      Sign up
    </button>
    <h2 style={{ color: 'red' }}>{error}</h2>
  </div>
);

LoginModal.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginModal;
