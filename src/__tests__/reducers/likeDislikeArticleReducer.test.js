import reducer from '../../redux/reducers/likeDislikeReducer';
import * as actionTypes from '../../redux/actionTypes/likeDislikeTypes';

let initialState;

initialState = {
    likes:{ count: 0 },
    dislikes:{ count: 0},
};

describe('Like dislike article reducer', () => {
    it('Should return the state of LIKE_ARTICLE', () => {
        expect(reducer(initialState, {
            payload: { likes: 1 },
            type: actionTypes.LIKE_ARTICLE
        })).toEqual({
            likes:{ count: 0 },
            dislikes:{ count: 0},
        })
    })
    it('Should return the state of DISLIKE_ARTICLE', () => {
        expect(reducer(initialState, {
            payload: { dislikes: 1 },
            type: actionTypes.DISLIKE_ARTICLE
        })).toEqual({
            likes:{ count: 0 },
            dislikes:{ count: 0},
        })
    })
    it('Should get all article likes', () => {
        expect(reducer(initialState, {
            payload: { likes: 1 },
            type: actionTypes.GET_LIKES_ARTICLE
        })).toEqual({
            likes:{ count: 1 },
            dislikes:{ count: 0},
        })
    })
    it('Should get all article dislikes', () => {
        expect(reducer(initialState, {
            payload: { dislikes: 1 },
            type: actionTypes.GET_DISLIKES_ARTICLE
        })).toEqual({
            likes:{ count: 0 },
            dislikes:{ count: 1},
        })
    })
    it('Should clear all likes and dislikes', () => {
        expect(reducer(initialState, {
            payload: { dislikes: 1 },
            type: actionTypes.CLEAR_LIKES_DISLIKES
        })).toEqual({
            likes:{ count: 0 },
            dislikes:{ count: 0},
        })
    })
})
