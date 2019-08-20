import * as types from '../actionTypes/actionTypes';
import initialState from '../store/initialStates/userInitialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state, signupSuccess: action.payload, errors: action.errors,
      };
    default: return state;
  }
};

export default reducer;
