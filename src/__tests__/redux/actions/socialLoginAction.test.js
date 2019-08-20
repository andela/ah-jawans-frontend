import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import socialLoginAction from '../../../redux/actions/sosialLoginAction';
import * as types from '../../../redux/actions/actionTypes';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe(' /actions', () => {
  it('it should find actions', () => {
    const data = {
      type: types.SIGNIN_ERROR,
      payload: {},
    };
    expect(store.dispatch(socialLoginAction({}))).toEqual(data);
  });

  it('it should pass using token', () => {
    const data = {
      type: types.SOCIAL_LOGIN,
      payload: { token: 'wqehfgikbqfe' },
    };
    const action = store.dispatch(socialLoginAction({ token: 'wqehfgikbqfe' }));
    expect(action).toEqual(data);
  });
});
