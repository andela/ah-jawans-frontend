import { userActionsTypes } from '../../actionTypes';
import initialState from '../../store/initialState';


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };

    case userActionsTypes.UPDATE_NOTIFICATION_STATUS:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };

    default:
      return state;
  }
};
