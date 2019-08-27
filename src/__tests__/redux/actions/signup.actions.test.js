import signupUserAction from '../../../redux/actions/auth/signup.actions';
import * as types from '../../../redux/actions/actionTypes';

describe('actions', () => {
  it('should create an action to add a user', () => {
    const payload = {
      username: 'patrick',
      email: 'patrick@gmail.com',
      password: 'Patrick@123',
    };
    const expectedAction = {
      type: types.SIGNUP_SUCCESS,
      payload,
    };
    expect(signupUserAction(payload)).toEqual(expectedAction);
  });
});
