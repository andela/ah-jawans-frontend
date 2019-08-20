
import { userActionsTypes } from '../../actionTypes';

const uploadUserProfile = (payload) => ({
  type: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
  payload,
});

export default uploadUserProfile;
