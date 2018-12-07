import cloneDeep from 'lodash.clonedeep';

const session = (state = null, action) => {
  if (action.type === 'UPDATE_SESSION') {
    return cloneDeep(action.payload);
  }
  return state;
};

const loggedIn = (state = null, action) => {
  if (action.type === 'SET_LOGGEDIN') {
    return action.payload;
  }
  return state;
};

export { session, loggedIn };
