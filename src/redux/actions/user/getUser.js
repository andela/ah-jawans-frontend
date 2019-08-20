import { userActionsTypes } from '../../actionTypes';

const getUserAction = (payload) => ({
  type: userActionsTypes.GET_USER_SUCCESS,
  payload,
});

export default getUserAction;
const getAUthorArticlesAction = (payload) => ({
  type: userActionsTypes.GET_AUTHOR_ARTICLES,
  payload,
});

const deleteArticleAction = (payload) => ({
  type: userActionsTypes.DELETE_ARTICLE,
  payload,
});

export { getUserAction, getAUthorArticlesAction, deleteArticleAction };
