import * as types from '../actionTypes/likeDislikeTypes';

const clearLikesOrDislikes = () => ({
  type: types.CLEAR_LIKES_DISLIKES,
});

const likeArticleAction = (payload) => ({
  type: types.LIKE_ARTICLE,
  payload,
});
const dislikeArticleAction = (payload) => ({
  type: types.DISLIKE_ARTICLE,
  payload,
});

const getArticleLikesAction = (payload) => ({
  type: types.GET_LIKES_ARTICLE,
  payload,
});

const getArticleDislikesAction = (payload) => ({
  type: types.GET_DISLIKES_ARTICLE,
  payload,
});
export {
  likeArticleAction,
  dislikeArticleAction,
  getArticleLikesAction,
  getArticleDislikesAction,
  clearLikesOrDislikes,
};
