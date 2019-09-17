import {
    clearLikesOrDislikesComments,
    likeCommentsAction,
    dislikeCommentsAction,
} from '../../../redux/actions/likesDislikesCommentsAction';
import * as types from '../../../redux/actionTypes/likeDislikeTypes';

describe('actions', () => {
    it('should allow users to like articles', () => {
        const type = 'CLEAR_LIKES_DISLIKES_COMMENTS';
        const expectedAction = {
            type: types.CLEAR_LIKES_DISLIKES_COMMENTS,
        };
        expect(clearLikesOrDislikesComments(type)).toEqual(expectedAction);
    })
    it('should allow users to like articles', () => {
        const payload = {
            count: 1,
        };
        const expectedAction = {
            type: types.LIKE_COMMENTS,
            payload,
        };
        expect(likeCommentsAction(payload)).toEqual(expectedAction);
    })
    it('should allow users to dislike articles', () => {
        const payload = {
            count: 1,
        };
        const expectedAction = {
            type: types.DISLIKE_COMMENTS,
            payload,
        };
        expect(dislikeCommentsAction(payload)).toEqual(expectedAction);
    })
})
