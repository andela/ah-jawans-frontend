import {
  REQUEST_PASSWORD_RESET,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
} from '../actionTypes/passwordReset';

const initialState = {
  reset: null,
  errors: null,
  data: null,
  passwordUpdate: null,
};
const resetPassword = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_PASSWORD_RESET:
      return {
        ...state,
        reset: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        data: payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        passwordUpdate: payload.message,
      };
    default:
      return state;
  }
};
export default resetPassword;
