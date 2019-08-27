import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import postDataThunk, { axiosInstance } from '../../../redux/thunks';
import signupUserAction from '../../../redux/actions/auth/signup.actions';
import * as types from '../../../redux/actions/actionTypes';

describe('auth actions', () => {
  let axiosMock;
  let store;
  const initialState = {
    signupSuccess: {},
    errors: null,
  };
  const userData = {
    username: 'patrick',
    email: 'patrick@gmail.com',
    password: 'Patrick@123',
  };

  const empyFields = {
    username: '',
    email: '',
    password: '',
  };

  beforeEach(() => {
    axiosMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });
  it('should signup user successfully', () => {
    const payload = { message: 'registered successfully' };
    axiosMock.onPost('users').reply(201, payload);
    store
      .dispatch(postDataThunk('post', 'users', signupUserAction, userData))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          payload,
        }]);
      });
  });
  it('should return error', () => {
    const payload = { message: 'registered successfully' };
    axiosMock.onPost('users').reply(201, payload);
    store
      .dispatch(postDataThunk('post', 'users', signupUserAction, userData))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          payload,
        }]);
      });
  });
  it('should return error', () => {
    const errors = { message: 'Fill all the fields' };
    axiosMock.onPost('users').reply(404, errors);
    store
      .dispatch(postDataThunk('post', 'users', signupUserAction, empyFields))
      .then(() => {
        expect(store.getActions()).toEqual([{
          type: types.SIGNUP_SUCCESS,
          errors,
        }]);
      });
  });
});
