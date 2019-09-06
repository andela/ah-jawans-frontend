import userReducer from '../../../redux/reducers/user/uploadImageReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('User reducers', () => {

  test('UPLOAD_PROFILE_PICTURE_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
      payload: {
        image: {
          original: 'image.jpg',
          square: 'image.jpg',
          circle: 'image.jpg'
        }
      }
    });

    expect(reducer.uploadImage).toHaveProperty('image');
    expect(reducer.uploadImage.image).toHaveProperty('original');
    expect(reducer.uploadImage.image).toHaveProperty('square');
    expect(reducer.uploadImage.image).toHaveProperty('circle');
  });
});
