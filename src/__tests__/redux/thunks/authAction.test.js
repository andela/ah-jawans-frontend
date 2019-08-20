jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { postDataThunk, axiosInstance } from '../../../redux/thunks';
import loginUserAction from '../../../redux/actions/loginAction';
import { LOGIN_USER } from '../../../redux/actions/types';
import stores from '../../../redux/store/index';

describe('auth actions', () => {
  let axiosMock;
  let store;
  const initialState = {
    userCredentials: {},
    errors: null,
  };
  const userData = {
    email: 'joe@gmail.com',
    password: 'Joe@123',
  };

  const empty = {
    email: '',
    password: '',
  };

  beforeEach(() => {
    axiosMock = new MockAdapter(axiosInstance);
    const mockStore = configureStore([thunk]);
    store = mockStore(initialState);
  });

  it('should login user successfully', () => {
    const payload = { message: 'Logged in successfully' };
    axiosMock.onPost('users/login').reply(200, payload);
    store
      .dispatch(postDataThunk('post', 'users/login', loginUserAction, userData))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            type: LOGIN_USER,
            payload,
          },
        ]);
      });
  });

  it('should return error', () => {
    const errors = { message: 'Logged in successfully' };
    axiosMock.onPost('users/login').reply(404, errors);
    store
      .dispatch(postDataThunk('post', 'users/login', loginUserAction, empty))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            type: LOGIN_USER,
            errors,
          },
        ]);
      });
  });

  it('it should return new state', () => {
    const localStore = stores({});
    expect(localStore).toHaveProperty('dispatch');
    expect(localStore).toHaveProperty('subscribe');
    expect(localStore).toHaveProperty('getState');
    expect(localStore).toHaveProperty('replaceReducer');
  });
});
