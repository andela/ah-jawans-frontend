import * as types from '../actionTypes/passwordReset';

const requestPasswordRequest = (payload) => ({
  type: types.REQUEST_PASSWORD_RESET,
  payload,
});

const changePassword = (payload) => ({
  type: types.UPDATE_PASSWORD,
  payload,
});

export { requestPasswordRequest, changePassword };
