import { LOGIN_USER } from './types';

const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export default loginUserAction;
