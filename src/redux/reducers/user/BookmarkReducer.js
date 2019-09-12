import { userActionsTypes } from '../../actionTypes';
import initialState from '../../store/initialState';


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
