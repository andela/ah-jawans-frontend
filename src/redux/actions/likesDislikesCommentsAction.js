import * as types from '../actionTypes/likeDislikeTypes';


const clearLikesOrDislikesComments = () => ({
  type: types.CLEAR_LIKES_DISLIKES_COMMENTS,
});

const likeCommentsAction = (payload) => ({
  type: types.LIKE_COMMENTS,
  payload,
});
const dislikeCommentsAction = (payload) => ({
  type: types.DISLIKE_COMMENTS,
  payload,
});

export {
  clearLikesOrDislikesComments,
  likeCommentsAction,
  dislikeCommentsAction,
};
