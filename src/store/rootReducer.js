import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
