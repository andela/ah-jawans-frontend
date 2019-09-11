import * as types from '../actionTypes/likeDislikeTypes';
import initialState from '../store/initialStates/userInitialState';

const likeDislikeArticleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CLEAR_LIKES_DISLIKES:
      return {
        ...state,
        likes: {
          ...state.likes,
          count: 0,
        },
        dislikes: {
          ...state.dislikes,
          count: 0,
        },
      };
    case types.LIKE_ARTICLE:
      return {
        ...state,
        likes: {
          ...state.likes,
        },
      };
    case types.DISLIKE_ARTICLE:
      return {
        ...state,
        dislikes: {
          ...state.dislikes,
        },
      };
    case types.GET_LIKES_ARTICLE:
      return {
        ...state,
        likes: {
          ...state.likes,
          count: payload.likes,
        },
      };
    case types.GET_DISLIKES_ARTICLE:
      return {
        ...state,
        dislikes: {
          ...state.dislikes,
          count: payload.dislikes,
        },
      };
    default:
      return state;
  }
};
export default likeDislikeArticleReducer;
