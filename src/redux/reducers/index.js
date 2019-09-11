import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import loginReducer from './loginReducer';
import socialSignin from './socialLoginReducer';
import getUserReducer from './user/getUserReducer';
import editProfileReducer from './user/editProfileReducer';
import uploadImageReducer from './user/uploadImageReducer';
import passwordReset from './passwordReset';
import notificationReducer from './user/notificationReducer';
import followerReducer from './followerReducer';
import optInOutEmailReducer from './optInOutEmailReducer';
import optInOutAppReducer from './optInOutAppReducer';
import getArticlesReducer from './getArticlesReducer';
import articleReducer from './articleReducer/articleReducer';
import searchReducer from './searchReducer';
import likeDislikeReducer from './likeDislikeReducer';

const rootReducers = combineReducers({
  userCredentials: loginReducer,
  signupSuccess: signupReducer,
  getUser: getUserReducer,
  editProfile: editProfileReducer,
  uploadImage: uploadImageReducer,
  errors: loginReducer,
  socialSignin,
  resetPassword: passwordReset,
  notification: notificationReducer,
  followerData: followerReducer,
  optInOutEmailReducer,
  optInOutAppReducer,
  likeDislikeReducer,
  articles: getArticlesReducer,
  article: articleReducer,

  searchData: searchReducer,
});

export default rootReducers;
