import { likeArticleAction, dislikeArticleAction, 
    getArticleLikesAction,getArticleDislikesAction } from '../../../redux/actions/likeDislikeAction';
import * as types from '../../../redux/actionTypes/likeDislikeTypes';

describe('actions', () => {
    it('should allow users to like articles', () => {
        const payload = {
            count: 1 ,
        };
        const expectedAction = {
            type: types.LIKE_ARTICLE,
            payload,
        };
        expect(likeArticleAction(payload)).toEqual(expectedAction);
    })
    it('should allow users to dislike articles', () => {
        const payload = {
            count: 1 ,
        };
        const expectedAction = {
            type: types.DISLIKE_ARTICLE,
            payload,
        };
        expect(dislikeArticleAction(payload)).toEqual(expectedAction);
    })
    it('should allow users to get all likes', () => {
        const payload = {
            count: 1 ,
        };
        const expectedAction = {
            type: types.GET_LIKES_ARTICLE,
            payload,
        };
        expect(getArticleLikesAction(payload)).toEqual(expectedAction);
    })
    it('should allow users to get all dislikes', () => {
        const payload = {
            count: 1 ,
        };
        const expectedAction = {
            type: types.GET_DISLIKES_ARTICLE,
            payload,
        };
        expect(getArticleDislikesAction(payload)).toEqual(expectedAction);
    })
})
