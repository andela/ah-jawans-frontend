import {
    getFollowerAction, getFollowingAction, followAction, unfollowAction, getAllUserAction,
    getFollowerActionNumber, getFollowingActionNumber,
  } from '../../../redux/actions/followerAction';
  import * as types  from '../../../redux/actions/actionTypes';

describe('actions', () => {
    it('should getFollowerAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.GET_FOLLOWERS, payload,
        };
        expect(getFollowerAction(payload)).toEqual(expectedAction);
    });
    it('should getFollowingAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.GET_FOLLOWING, payload 
        };
        expect(getFollowingAction(payload)).toEqual(expectedAction);
    });
    it('should followAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.FOLLOW_SUCCESS, payload
        };
        expect(followAction(payload)).toEqual(expectedAction);
    });
    it('should unfollowAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.UNFOLLOW_SUCCESS, payload
        };
        expect(unfollowAction(payload)).toEqual(expectedAction);
    });
    it('should getAllUserAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.GET_ALL_USERS, payload
        };
        expect(getAllUserAction(payload)).toEqual(expectedAction);
    });
    it('should getFollowingActionNumber', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.GET_FOLLOWING_NUMBER, payload
        };
        expect(getFollowingActionNumber(payload)).toEqual(expectedAction);
    });
    it('should getFollowerActionNumber', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: types.GET_FOLLOWERS_NUMBER, payload
        };
        expect(getFollowerActionNumber(payload)).toEqual(expectedAction);
    });
});
