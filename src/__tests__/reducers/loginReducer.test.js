import reducer from '../../redux/reducers/loginReducer';
import * as actionTypes from '../../redux/actions/actionTypes';
import initialState from '../../redux/store/initialStates/userInitialState';

let userCredentials;

describe('Login reducer', () => {

  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should return the initial state', () => {

    expect(reducer({
      userCredentials: {},
      errors: null,
    }, {
        type: actionTypes.LOGIN_USER,
        userCredentials: { user: { email: 'joe@gmail.com', password: 'Joe1234@' } },
      })).toEqual({ userCredentials });
  });
});
