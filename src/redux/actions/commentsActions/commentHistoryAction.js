import * as types from '../../actionTypes/actionTypes';

const getCommentHistoryAction = (payload) => ({
  type: types.GET_COMMENTS_HISTORY,
  payload,
});

export default getCommentHistoryAction;
