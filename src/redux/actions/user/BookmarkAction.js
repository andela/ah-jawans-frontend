import { userActionsTypes } from '../../actionTypes';

const postbookmarkAction = (payload) => ({
  type: userActionsTypes.POST_BOOKMARK_SUCCESS,
  payload,
});

const getbookmarkAction = (payload) => ({
  type: userActionsTypes.GET_BOOKMARK_SUCCESS,
  payload,
});

const deletebookmarkAction = (payload) => ({
  type: userActionsTypes.DELETE_BOOKMARK_SUCCESS,
  payload,
});

export { postbookmarkAction, getbookmarkAction, deletebookmarkAction };
