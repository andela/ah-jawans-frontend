import userReducer from '../../../redux/reducers/user';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {

  test('EDIT_PROFILE_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.EDIT_PROFILE_SUCCESS,
      payload: { user }
    });
  });
});
