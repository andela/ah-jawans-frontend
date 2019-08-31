import { userActionsTypes } from '../../actionTypes';

const getNotificationsAction = (payload) => ({
  type: userActionsTypes.GET_NOTIFICATION_SUCCESS,
  payload,
});

const ReadNotificationsAction = (payload) => ({
  type: userActionsTypes.UPDATE_NOTIFICATION_STATUS,
  payload,
});

export { getNotificationsAction, ReadNotificationsAction };
