import * as types from '../actions/actionTypes';
import initialState from '../store/initialStates/userInitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FOLLOW_SUCCESS:
      return {
        ...state,
        follow: { ...state.follow, data: action.payload, message: action.payload.message },
      };
    case types.UNFOLLOW_SUCCESS:
      return {
        ...state,
        unfollow: { ...state.unfollow, data: action.payload, message: action.payload.message },
      };
    case types.GET_FOLLOWERS:
      return {
        ...state,
        getAllfollower: { ...state.getAllfollower, data: action.payload },
      };
    case types.GET_FOLLOWING:
      return {
        ...state,
        getAllfollowing: { ...state.getAllfollowing, data: action.payload },
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        getAllUsers: { ...state.getAllUsers, data: action.payload },
      };
    case types.GET_FOLLOWERS_NUMBER:
      return {
        ...state,
        followerNumber: action.payload.followers ? action.payload.followers.length : 0,
      };
    case types.GET_FOLLOWING_NUMBER:
      return {
        ...state,
        followingNumber: action.payload.following ? action.payload.following.length : 0,
      };
    default:
      return {
        ...state,
      };
  }
};
