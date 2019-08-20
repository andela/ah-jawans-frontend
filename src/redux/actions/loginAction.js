/* eslint-disable import/prefer-default-export */
// import axios from 'axios';
import { LOGIN_USER } from './types';

const loginUserAction = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export default loginUserAction;
