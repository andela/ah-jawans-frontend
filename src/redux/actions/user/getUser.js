import { userActionsTypes } from '../../actionTypes';

const getUserAction = (payload) => ({
  type: userActionsTypes.GET_USER_SUCCESS,
  payload,
});

export default getUserAction;
