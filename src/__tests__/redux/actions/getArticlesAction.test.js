import * as types from '../../../redux/actions/actionTypes';
import getArticlesAction from '../../../redux/actions/getArticlesAction';

describe('actions', () => {
  it('should create an action to login a user', () => {
    const payload = {
        status: 200,
        articles: []
    }
    const expectedAction = {
      type: types.GET_ARTICLES,
      payload
    };
    expect(getArticlesAction(payload)).toEqual(expectedAction);
  });
});