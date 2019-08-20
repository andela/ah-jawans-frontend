import reducer from '../../../redux/reducers/signup.reducer';
import * as actionTypes from '../../../redux/actionTypes/actionTypes';
import configureStore from '../../../redux/configureStore';

let initialState;
let signupSuccess;

describe('Signup reducer', () => {
  beforeEach(() => {
    initialState = {
      signupSuccess: {},
      errors: null,
    };
  });
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should return the initial state', () => {
    expect(reducer({
      signupSuccess: { },
      errors: null,
    }, {
      type: actionTypes.SIGNUP_SUCCESS,
      signupSuccess: { user: { username: 'patrick', email: 'patrick@gmail.com', password: 'password@1' } },
    })).toEqual({ signupSuccess });
  });

  it('it should return new state', () => {
    const store = configureStore({});
    expect(store).toHaveProperty('dispatch');
    expect(store).toHaveProperty('subscribe');
    expect(store).toHaveProperty('getState');
    expect(store).toHaveProperty('replaceReducer');
  });
});
