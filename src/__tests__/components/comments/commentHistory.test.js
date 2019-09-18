import getCommentHistoryAction from '../../../redux/actions/commentsActions/commentHistoryAction';
import { GET_COMMENTS_HISTORY } from '../../../redux/actionTypes/actionTypes';

describe('Track comment history actions', () => {
    it('should get comment History', () => {
        const payload = {};
        const expectedAction = {
  type: GET_COMMENTS_HISTORY,
  payload,
        };
        expect(getCommentHistoryAction(payload)).toEqual(expectedAction);
    });
});
