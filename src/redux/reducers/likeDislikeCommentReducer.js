import * as types from '../actionTypes/likeDislikeTypes';
import initialState from '../store/initialStates/userInitialState';

const likeDislikeCommentsReducer = (state = initialState, { type }) => {
  switch (type) {
    case types.CLEAR_LIKES_DISLIKES_COMMENTS:
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
    case types.LIKE_COMMENTS:
      return {
        ...state,
        likes: {
          ...state.likes,
        },
      };
    case types.DISLIKE_COMMENTS:
      return {
        ...state,
        dislikes: {
          ...state.dislikes,
        },
      };
    default:
      return state;
  }
};

export default likeDislikeCommentsReducer;
