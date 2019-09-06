import initialState from '../../../redux/store/initialStates/userInitialState';
import { GET_ARTICLES } from '../../../redux/actions/actionTypes';
import getArticlesReducer from '../../../redux/reducers/getArticlesReducer';

let articles = {
    "title": "this is the title",
    "body": "this is the body of teh article",
    "author": {
        "username": "patrickngabo",
    }
  };

describe('Get articles reducer', () => {
    test('GET_ARTICLES', () => {
        getArticlesReducer(initialState.articles, {
        type: GET_ARTICLES,
        payload: {articles}
      });
      expect(articles).toHaveProperty('title');
    });
});