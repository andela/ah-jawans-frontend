import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducers = combineReducers({
  userCredentials: loginReducer,
  errors: loginReducer,
});

export default rootReducers;
