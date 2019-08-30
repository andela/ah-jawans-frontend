import { userActionsTypes } from '../../actionTypes';

const getNotificationsAction = (payload) => ({
  type: userActionsTypes.GET_NOTIFICATION_SUCCESS,
  payload,
});

export default getNotificationsAction;
