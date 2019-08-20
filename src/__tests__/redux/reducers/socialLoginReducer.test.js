import socialLoginReducer from '../../../redux/reducers/socialLoginReducer';
import * as types from '../../../redux/actions/actionTypes';
import configureStore from '../../../redux/configureStore';

const initialState = {
  token: localStorage.token || null,
};

describe('social login reducer test', () => {
  it('it should return initial state', () => {
    const state = socialLoginReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  it('it should return new state', () => {
    const newState = {
      ...initialState,
      token: 'ewhugu',
    };
    const state = socialLoginReducer(initialState, { type: types.SOCIAL_LOGIN, payload: { token: 'ewhugu' } });
    expect(state).toEqual(newState);
  });

  it('it should return new state', () => {
    const newState = {
      ...initialState,
      error: 'Sorry, login have failed',
    };
    const state = socialLoginReducer(initialState, { type: types.SIGNIN_ERROR, payload: {} });
    expect(state).toEqual(newState);
  });

  it('it should return new state', () => {
    const store = configureStore({});
    expect(store).toHaveProperty('dispatch');
    expect(store).toHaveProperty('subscribe');
    expect(store).toHaveProperty('getState');
    expect(store).toHaveProperty('replaceReducer');
  });
});
