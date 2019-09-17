import reportAction from '../../../redux/actions/reportAction';
import * as types from '../../../redux/actions/actionTypes';

describe('actions', () => {
    it('should allow users to like articles', () => {
        const payload = {
            count: 1,
        };
        const expectedAction = {
            type: types.REPORT_ARTICLES,
            payload,
        };
        expect(reportAction(payload)).toEqual(expectedAction);
    })
});
