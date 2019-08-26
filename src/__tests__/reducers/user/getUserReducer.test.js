import userReducer from '../../../redux/reducers/user';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_SUCCESS,
      payload: { user }
    });
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
  });
});


