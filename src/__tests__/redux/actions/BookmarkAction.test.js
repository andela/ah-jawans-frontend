import postbookmarkAction from '../../../redux/actions/user/BookmarkAction';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should post bookmark article request', () => {
        const payload = {
            id: 1,
        };
        const expectedAction = {
            type: userActionsTypes.POST_BOOKMARK_SUCCESS,
            payload,
        };
        expect(postbookmarkAction(payload)).toEqual(expectedAction);
    });
});
