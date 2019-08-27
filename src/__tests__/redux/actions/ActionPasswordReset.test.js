import { requestPasswordRequest, changePassword } from '../../../redux/actions/passwordReset';
import * as types from '../../../redux/actions/actionTypes';

describe('actions', () => {
  it('should create an action to login a user', () => {
    const payload = {
      email: 'joe@gmail.com',
      password: 'Joe@123',
    };

    const expectedAction = {
      type: 'REQUEST_PASSWORD_RESET',
      payload: { email: 'joe@gmail.com', password: 'Joe@123' },
    };
    expect(requestPasswordRequest(payload)).toEqual(expectedAction);
  });

  it('should create an action to login a user', () => {
    const payload = {
      password: 'Joe@123dferF',
    };
   
    const expectedAction = {
      type: 'UPDATE_PASSWORD',
      payload: { password: 'Joe@123dferF' },
    };
    expect(changePassword(payload)).toEqual(expectedAction);
  });
});
