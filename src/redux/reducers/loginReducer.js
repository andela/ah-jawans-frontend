import { LOGIN_USER } from '../actions/types';

const initialState = {
  userCredentials: {},
  errors: null,
};

export default function (state = initialState, action) {
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
