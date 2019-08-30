/* eslint-disable no-use-before-define */
import * as types from '../actionTypes/actionTypes';

const signupUserAction = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});
export default signupUserAction;
