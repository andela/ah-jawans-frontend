import userReducer from '../../../redux/reducers/user/getUserReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';
import user from '../../../__mocks__/user';
import getArticlesReducer from '../../../redux/reducers/index';

const articles = {
    "title": "this is the title",
    "body": "this is the body of teh article",
    "author": {
        "username": "patrickngabo",
    }
}

  const deleteArticle = {
    message: 'article deleted'
  }

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = userReducer(initialState, {
      type: userActionsTypes.GET_USER_SUCCESS,
      payload: { user }
    });
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('username');
    expect(user).toHaveProperty('email');
  });

  test('GET_AUTHOR_ARTICLES', () => {
      getArticlesReducer(initialState.articles, {
      type: userActionsTypes.GET_AUTHOR_ARTICLES,
      payload: {articles}
    });
    expect(articles).toHaveProperty('body');
    expect(articles).toHaveProperty('title');
  });

  test('DELETE_ARTICLE', () => {
    getArticlesReducer(initialState.articles, {
    type: userActionsTypes.DELETE_ARTICLE,
    payload: {deleteArticle}
  });
  expect(deleteArticle).toHaveProperty('message');
});
});


