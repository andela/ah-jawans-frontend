import { userActionsTypes } from '../../actionTypes';
import initialState from '../../store/initialStates/userInitialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isAuth: true,
        editProfile: {
          loading: false,
          message: payload.message,
          errors: {},
          data: payload.data,
        },
      };
    default:
      return state;
  }
};
