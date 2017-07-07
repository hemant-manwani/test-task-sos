import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const dummyreducer = (state = {}) => state;

const reducers = {
  dummyreducer,
  form: formReducer,
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
