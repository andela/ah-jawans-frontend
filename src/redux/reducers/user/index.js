import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import editProfileReducer from './editProfileReducer';
import uploadImageReducer from './uploadImageReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const editProfile = editProfileReducer(state, action);
  const uploadImage = uploadImageReducer(state, action);
  return getUser || editProfile || uploadImage || state;
};
