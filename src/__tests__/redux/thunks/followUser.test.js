jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { getDataThunkPrivate, axiosInstance, postDataThunkPrivate } from '../../../redux/thunks';
import {
    getFollowerAction, getFollowingAction, followAction, unfollowAction, getAllUserAction,
    getFollowerActionNumber, getFollowingActionNumber,
  } from '../../../redux/actions/followerAction';
import { userActionsTypes } from '../../../redux/actionTypes';
import stores from '../../../redux/store/index';

describe('auth actions', () => {
    let axiosMock;
    let store;
    let getUser;
    const initialState = {
        notifications: {},
        errors: null,
    };

    beforeEach(() => {
        axiosMock = new MockAdapter(axiosInstance);
        const mockStore = configureStore([thunk]);
        store = mockStore(initialState);
    });

    it('should display getFollowerAction', () => {
        const payload = {};
        axiosMock.onGet('profiles/followers').reply(payload);
        store
            .dispatch(getDataThunkPrivate('get', 'profiles/followers', getFollowerAction))
            .then(() => {
                expect(store.getFollowerAction()).toEqual([
                    {
                        type: types.GET_FOLLOWERS, payload,
                    },
                ]);
            });
    });

    it('should getFollowingAction successfully', () => {
        const payload = { };
        axiosMock.onGet('profiles/following').reply(payload);
        store
            .dispatch(getDataThunkPrivate('get', 'profiles/following', getFollowingAction))
            .then(() => {
                expect(store.getFollowingAction()).toEqual([
                    {
                        type: types.GET_FOLLOWING, payload
                    },
                ]);
            });
    });

    it('should getFollowingAction successfully', () => {
        const payload = { message: 'Notification Viewed!', };
        axiosMock.onPost('profiles/faustin/follow').reply(payload);
        store
            .dispatch(postDataThunkPrivate('post', 'profiles/faustin/follow', followAction))
            .then(() => {
                expect(store.followAction()).toEqual([
                    {
                        type: types.FOLLOW_SUCCESS, payload
                    },
                ]);
            });
    });

    it('should getFollowingAction successfully', () => {
        const payload = {};
        axiosMock.onDelete('profiles/faustin/follow').reply(payload);
        store
            .dispatch(getDataThunkPrivate('delete', 'profiles/faustin/follow', unfollowAction))
            .then(() => {
                expect(store.unfollowAction()).toEqual([
                    {
                        type: types.UNFOLLOW_SUCCESS, payload
                    },
                ]);
            });
    });

    it('should getAllUserAction successfully', () => {
        const payload = { };
        axiosMock.onGet('/allusers/').reply(payload);
        store
            .dispatch(getDataThunkPrivate('get', '/allusers/', getAllUserAction))
            .then(() => {
                expect(store.getAllUserAction()).toEqual([
                    {
                        type: types.GET_ALL_USERS, payload
                    },
                ]);
            });
    });

    it('should getFollowingActionNumber successfully', () => {
        const payload = { };
        axiosMock.onGet('profiles/following').reply(payload);
        store
            .dispatch(getDataThunkPrivate('patch', 'profiles/following', getFollowingActionNumber))
            .then(() => {
                expect(store.getFollowingActionNumber()).toEqual([
                    {
                        type: types.GET_FOLLOWING_NUMBER, payload
                    },
                ]);
            });
    });

    it('should getFollowerActionNumber successfully', () => {
        const payload = { };
        axiosMock.onGet('profiles/followers').reply(payload);
        store
            .dispatch(getDataThunkPrivate('get', 'profiles/followers', getFollowerActionNumber))
            .then(() => {
                expect(store.getFollowerActionNumber()).toEqual([
                    {
                        type: types.GET_FOLLOWERS_NUMBER, payload
                    },
                ]);
            });
    });

    it('it should return new state', () => {
        const localStore = stores({});
        expect(localStore).toHaveProperty('dispatch');
        expect(localStore).toHaveProperty('subscribe');
        expect(localStore).toHaveProperty('getState');
        expect(localStore).toHaveProperty('replaceReducer');
    });
});
