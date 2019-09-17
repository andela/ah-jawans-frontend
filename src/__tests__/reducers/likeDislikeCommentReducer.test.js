import reducer from '../../redux/reducers/likeDislikeCommentReducer';
import * as actionTypes from '../../redux/actionTypes/likeDislikeTypes';

let initialState;

initialState = {
    likes: { count: 0 },
    dislikes: { count: 0 },
};

describe('Like dislike article reducer', () => {
    it('Should return the state of LIKE_ARTICLE', () => {
        expect(reducer(initialState, {
            payload: { likes: 1 },
            type: actionTypes.LIKE_COMMENTS
        })).toEqual({
            likes: { count: 0 },
            dislikes: { count: 0 },
        })
    })
    it('Should return the state of DISLIKE_ARTICLE', () => {
        expect(reducer(initialState, {
            payload: { dislikes: 1 },
            type: actionTypes.DISLIKE_COMMENTS
        })).toEqual({
            likes: { count: 0 },
            dislikes: { count: 0 },
        })
    })
    it('Should clear all likes and dislikes', () => {
        expect(reducer(initialState, {
            payload: { dislikes: 1 },
            type: actionTypes.CLEAR_LIKES_DISLIKES_COMMENTS
        })).toEqual({
            likes: { count: 0 },
            dislikes: { count: 0 },
        })
    })
})
