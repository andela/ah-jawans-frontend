import { LOGIN_USER } from '../actionTypes';

const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export default loginUserAction;
