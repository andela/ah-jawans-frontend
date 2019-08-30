import { LOGIN_USER } from '../actions/actionTypes';
import initialState from '../store/initialStates/userInitialState';

export default function (state = initialState, action) {
  console.log(state, 'from login');
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userCredentials: action.payload,
        errors: action.errors,
      };

    default:
      return state;
  }
}
