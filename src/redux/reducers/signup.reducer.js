import * as types from '../actionTypes/actionTypes';

const initialState = {
  signupSuccess: {},
  errors: null,
};

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
