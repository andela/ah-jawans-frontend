
import { userActionsTypes } from '../../actionTypes';

const patchUserAction = (payload) => ({
  type: userActionsTypes.EDIT_PROFILE_SUCCESS,
  payload,
});

export default patchUserAction;
