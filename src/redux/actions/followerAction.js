import * as types from './actionTypes';

const getFollowerAction = (payload) => ({
  type: types.GET_FOLLOWERS, payload,
});

const getFollowingAction = (payload) => ({ type: types.GET_FOLLOWING, payload });
const followAction = (payload) => ({ type: types.FOLLOW_SUCCESS, payload });
const unfollowAction = (payload) => ({ type: types.UNFOLLOW_SUCCESS, payload });
const getAllUserAction = (payload) => ({ type: types.GET_ALL_USERS, payload });
const getFollowingActionNumber = (payload) => ({ type: types.GET_FOLLOWING_NUMBER, payload });
const getFollowerActionNumber = (payload) => ({ type: types.GET_FOLLOWERS_NUMBER, payload });
export {
  getFollowerAction, getFollowingAction, followAction, unfollowAction, getAllUserAction,
  getFollowerActionNumber, getFollowingActionNumber,
};
