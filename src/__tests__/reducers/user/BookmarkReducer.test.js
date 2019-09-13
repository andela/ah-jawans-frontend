import BookmarkReducer from '../../../redux/reducers/user/BookmarkReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
    test('Bookmark TESTS', () => {
        const reducer = BookmarkReducer(initialState, {
            type: userActionsTypes.POST_BOOKMARK_SUCCESS,
            payload: { user }
        });
    });
    test('Bookmark TESTS', () => {
        const reducer = BookmarkReducer(initialState, {
            type: userActionsTypes.GET_BOOKMARK_SUCCESS,
            payload: { user }
        });
    });
    test('Bookmark TESTS', () => {
        const reducer = BookmarkReducer(initialState, {
            type: userActionsTypes.DELETE_BOOKMARK_SUCCESS,
            payload: { user }
        });
    });
});
