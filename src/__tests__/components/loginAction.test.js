import LoginAction from '../../redux/actions/loginAction';
import * as types from '../../redux/actions/types';

describe('actions', () => {
  it('should create an action to login a user', () => {
    const payload = {
      email: 'joe@gmail.com',
      password: 'Joe@123',
    };
    const expectedAction = {
      type: types.LOGIN_USER,
      payload,
    };
    expect(LoginAction(payload)).toEqual(expectedAction);
  });
});
