import * as types from '../../actionTypes/actionTypes';

const initialState = {
  article: {},
  token: localStorage.token || null,
  error: null,
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ARTICLE_SUCCESS:
      return { ...state, article: action.payload };
    case types.UPDATE_ARTICLE_SUCCESS:
      return { ...state, article: action.payload };
    default:
      return state;
  }
};

export default articleReducer;
