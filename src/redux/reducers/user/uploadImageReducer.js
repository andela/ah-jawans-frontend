import { userActionsTypes } from '../../actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        uploadImage: { loading: false, image: payload.image, errors: {} },
      };
    default:
      return null;
  }
};
