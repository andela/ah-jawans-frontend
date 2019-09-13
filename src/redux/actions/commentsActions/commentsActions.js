import * as types from '../../actionTypes/actionTypes';

export const createCommentAction = (payload) => ({
  type: types.CREATE_COMMENTS_SUCCESS,
  payload,
});
export const updateCommentAction = (payload) => ({
  type: types.UPDATE_COMMENTS_SUCCESS,
  payload,
});
export const deleteCommentAction = (payload) => ({
  type: types.DELETE_COMMENTS_SUCCESS,
  payload,
});
export const getAllCommentsAction = (payload) => ({
  type: types.GET_ALL_COMMENTS_SUCCESS,
  payload,
});
