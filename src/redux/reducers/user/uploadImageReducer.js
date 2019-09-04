import { userActionsTypes } from '../../actionTypes';
import initialState from '../../store/initialState';


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS:
      return {
        ...state,
        uploadImage: { loading: false, image: payload.image, errors: {} },
      };
    default:
      return state;
  }
};
