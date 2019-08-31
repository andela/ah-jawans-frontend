jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { getDataThunkPrivate, axiosInstance, postDataThunkPrivate } from '../../../redux/thunks';
import { getNotificationsAction, ReadNotificationsAction } from '../../../redux/actions/user/notifications';
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

    it('should display notifications successfully', () => {
        const payload = { message: 'Notifications' };
        axiosMock.onGet('viewNotifications/111/unseen').reply(payload);
        store
            .dispatch(getDataThunkPrivate('get', 'viewNotifications/111/unseen', getNotificationsAction))
            .then(() => {
                expect(store.getNotificationsAction()).toEqual([
                    {
                        type: userActionsTypes.GET_NOTIFICATION_SUCCESS,
                        payload,
                    },
                ]);
            });
    });

    it('should update notifications successfully', () => {
        const payload = { message: 'Notification Viewed!', };
        axiosMock.onPatch('viewNotifications/111/seen/1').reply(payload);
        store
            .dispatch(postDataThunkPrivate('patch', 'viewNotifications/111/seen/1', ReadNotificationsAction))
            .then(() => {
                expect(store.ReadNotificationsAction()).toEqual([
                    {
                        type: userActionsTypes.UPDATE_NOTIFICATION_STATUS,
                        payload,
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
