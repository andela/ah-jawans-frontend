import * as types from '../actions/actionTypes';

const initialState = {
  token: localStorage.token || null,
};
const socialSignin = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SOCIAL_LOGIN:
      return { ...state, ...payload };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        error: 'Sorry, login have failed',
      };
    default:
      return state;
  }
};

export default socialSignin;
