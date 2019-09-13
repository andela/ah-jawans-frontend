import * as types from '../../actionTypes/actionTypes';

const initialState = {
  comments: {},
  token: localStorage.token || null,
  errors: null,
};
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case types.UPDATE_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case types.DELETE_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    case types.GET_ALL_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
