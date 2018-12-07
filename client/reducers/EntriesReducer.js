import cloneDeep from 'lodash.clonedeep';

const entries = (state = null, action) => {
  if (action.type === 'UPDATE_ENTRIES') {
    return cloneDeep(action.payload);
  }
  return state;
};

export default entries;
