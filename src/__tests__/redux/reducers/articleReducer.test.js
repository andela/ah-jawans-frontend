import articleReducer from '../../../redux/reducers/articleReducer/articleReducer';
import * as types from '../../../redux/actions/actionTypes';
import user from '../../../__mocks__/user';

const initialState = {
  article: {},
  token: localStorage.token || null,
  error: null,
};

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = articleReducer(initialState, {
    type: types.CREATE_ARTICLE_SUCCESS,
    payload: {user},
    });
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
  });

    test('UPDATE_ARTICLE_SUCCESS', () => {
    const reducer = articleReducer(initialState, {
    type: types.UPDATE_ARTICLE_SUCCESS,
    payload: {user},
    });
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
  });
});


