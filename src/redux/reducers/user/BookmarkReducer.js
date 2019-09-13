import { userActionsTypes } from '../../actionTypes';

export const initialState = {
  bookmarks: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case userActionsTypes.GET_BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmarks: payload.bookmarks || payload.bookmarks,
        bookmarkCount: payload.bookmarkCount,
        errors: payload.message,
      };

    case userActionsTypes.DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
