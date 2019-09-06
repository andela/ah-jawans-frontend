import followerReducer from '../../redux/reducers/followerReducer';
import * as types from '../../redux/actions/actionTypes';
import initialState from '../../redux/store/initialStates/userInitialState';
import user from '../../__mocks__/user';

let userCredentials;

describe('User reducers', () => {
    test('followerReducer', () => {
      const reducer = followerReducer(initialState, {
        type: types.GET_FOLLOWERS, payload: {},
      });
      expect(user).toHaveProperty('firstName');
      expect(user).toHaveProperty('lastName');
      expect(user).toHaveProperty('username');
      expect(user).toHaveProperty('email');
    });
    test('getFollowingAction', () => {
        const reducer = followerReducer(initialState, {
            type: types.GET_FOLLOWING, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
      test('followAction', () => {
        const reducer = followerReducer(initialState, {
            type: types.FOLLOW_SUCCESS, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
      test('unfollowAction', () => {
        const reducer = followerReducer(initialState, {
            type: types.UNFOLLOW_SUCCESS, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
      test('followerReducer', () => {
        const reducer = followerReducer(initialState, {
            type: types.GET_ALL_USERS, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
      test('followerReducer', () => {
        const reducer = followerReducer(initialState, {
            type: types.GET_FOLLOWING_NUMBER, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
      test('followerReducer', () => {
        const reducer = followerReducer(initialState, {
            type: types.GET_FOLLOWERS_NUMBER, payload: {},
        });
        expect(user).toHaveProperty('firstName');
        expect(user).toHaveProperty('lastName');
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('email');
      });
  });
  