import { userActionsTypes } from '../../actionTypes';

const postbookmarkAction = (payload) => ({
  type: userActionsTypes.POST_BOOKMARK_SUCCESS,
  payload,
});


export default postbookmarkAction;
