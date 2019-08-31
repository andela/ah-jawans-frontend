import reducer from '../../../redux/reducers/signup.reducer';
import * as actionTypes from '../../../redux/actionTypes/actionTypes';
import configureStore from '../../../redux/store/index';

let initialState;
let signupSuccess;

describe('Signup reducer', () => {
  beforeEach(() => {
    initialState = {
      profile: localStorage.user || '{}',
      isAuth: !!localStorage.token,
      userCredentials: {},
      errors: null,
      signupSuccess: {},
      getUser: {},
      editProfile: {
        loading: false,
        message: '',
        errors: {},
        data: {},
      },
      uploadImage: {
        loading: false,
        image: {},
        errors: {},
      },
      notification: {
        loading: false,
        message: {},
        errors: {},
      },
    };
  });
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should return the initial state', () => {
    expect(reducer({
      signupSuccess: {},
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
