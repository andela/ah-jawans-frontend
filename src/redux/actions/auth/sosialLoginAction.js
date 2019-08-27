import * as types from '../actionTypes';

const socialLoginAction = (data) => (dispatch) => {
  if (data.token) {
    localStorage.token = data.token;
    return dispatch({
      type: types.SOCIAL_LOGIN,
      payload: data,
    });
  }

  return dispatch({
    type: types.SIGNIN_ERROR,
    payload: {},
  });
};

export default socialLoginAction;
