import getArticleAction from '../../../redux/actions/getArticlesAction';
import { GET_ARTICLES } from '../../../redux/actions/actionTypes';

describe('actions', () => {
    it('should get articles', () => {
        const payload = {};
        const expectedAction = {
  type: GET_ARTICLES,
  payload,
        };
        expect(getArticleAction(payload)).toEqual(expectedAction);
    });
});
