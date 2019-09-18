import * as types from '../../actionTypes/actionTypes';

const initialState = {
  commentHistory: [],
};
export const commentHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS_HISTORY:

      return { ...state, commentHistory: action.payload };

    default:
      return state;
  }
};

export default commentHistoryReducer;
