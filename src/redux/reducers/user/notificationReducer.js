import { userActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };
    default:
      return null;
  }
};
