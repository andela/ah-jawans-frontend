import { userActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token || localStorage.token;
      return {
        ...state,
        isAuth: true,
        ...payload,
      };
    default:
      return null;
  }
};
