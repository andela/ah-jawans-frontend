import reducer from '../../../redux/reducers/loginReducer';
import * as actionTypes from '../../../redux/actions/types';

let initialState;
let userCredentials;

describe('Login reducer', () => {
  beforeEach(() => {
    initialState = {
      userCredentials: {},
      errors: null,
    };
  });
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should return the initial state', () => {
    expect(reducer({
      userCredentials: { },
      errors: null,
    }, {
      type: actionTypes.LOGIN_USER,
      userCredentials: { user: { email: 'joe@gmail.com', password: 'Joe1234@' } },
    })).toEqual({ userCredentials });
  });
});
