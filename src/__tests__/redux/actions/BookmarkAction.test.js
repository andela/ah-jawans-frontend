import { postbookmarkAction, getbookmarkAction, deletebookmarkAction } from '../../../redux/actions/user/BookmarkAction';
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
    it('should get bookmark article request', () => {
        const payload = {
            id: 1,
        };
        const expectedAction = {
            type: userActionsTypes.GET_BOOKMARK_SUCCESS,
            payload,
        };
        expect(getbookmarkAction(payload)).toEqual(expectedAction);
    });
    it('should post bookmark article request', () => {
        const payload = {
            id: 1,
        };
        const expectedAction = {
            type: userActionsTypes.DELETE_BOOKMARK_SUCCESS,
            payload,
        };
        expect(deletebookmarkAction(payload)).toEqual(expectedAction);
    });
});
