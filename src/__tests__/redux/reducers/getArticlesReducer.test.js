import getArticlesReducer from '../../../redux/reducers/getArticlesReducer';
import { GET_ARTICLES } from '../../../redux/actions/actionTypes';
import user from '../../../__mocks__/user';

 const initialState = {
  articles: [],
};

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = getArticlesReducer(initialState, {
  type: GET_ARTICLES,
  payload: {user},
    });
  });
});


