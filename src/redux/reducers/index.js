import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';

const rootReducers = combineReducers({
  signupSuccess: signupReducer,
});

export default rootReducers;
