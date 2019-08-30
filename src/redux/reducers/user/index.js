import { user as initialState } from '../../store/initialState';
import getUserReducer from './getUserReducer';
import editProfileReducer from './editProfileReducer';
import uploadImageReducer from './uploadImageReducer';
import notificationReducer from './notificationReducer';

export default (state = initialState, action) => {
  const getUser = getUserReducer(state, action);
  const editProfile = editProfileReducer(state, action);
  const uploadImage = uploadImageReducer(state, action);
  const notifications = notificationReducer(state, action);
  return getUser || editProfile || uploadImage || notifications || state;
};
