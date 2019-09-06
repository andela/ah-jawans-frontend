import { userActionsTypes } from '../../actionTypes';

const getUserAction = (payload) => ({
  type: userActionsTypes.GET_USER_SUCCESS,
  payload,
});

const getAUthorArticlesAction = (payload) => ({
  type: userActionsTypes.GET_AUTHOR_ARTICLES,
  payload,
});

export { getUserAction, getAUthorArticlesAction };
