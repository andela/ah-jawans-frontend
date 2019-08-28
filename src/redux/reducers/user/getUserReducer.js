import { userActionsTypes } from '../../actionTypes';
import initialState from '../../store/initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token || localStorage.token;
      return {
        ...state,
        isAuth: true,
        ...payload.profile,
      };
    case userActionsTypes.GET_AUTHOR_ARTICLES:
      return {
        ...state,
        isAuth: true,
        ...payload,
      };
    default:
      return state;
  }
};
