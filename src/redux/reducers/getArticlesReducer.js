import { GET_ARTICLES } from '../actions/actionTypes';

export const initialState = {
  articles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.article || action.payload.articles,
        articlesCount: action.payload.articlesCount,
      };
    default:
      return state;
  }
};
