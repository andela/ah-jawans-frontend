jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { postDataThunkPrivate, axiosInstance } from '../../../redux/thunks';
import patchUserAction from '../../../redux/actions/user/editProfile';
import { userActionsTypes } from '../../../redux/actionTypes/userActionsTypes';
import stores from '../../../redux/store/index';

describe('auth actions', () => {
    let axiosMock;
    let store;
    let data;
    const initialState = {
        editProfile: {},
        errors: null,
    };
    const userData = {
        firstname: 'ShaluVCcc',
        lastname: 'chandwani',
    };

    const DataError = {
        firstname: 'shaluvvvvvv456456',
        lastname: 'chandwaniwer444',
    };

    beforeEach(() => {
        axiosMock = new MockAdapter(axiosInstance);
        const mockStore = configureStore([thunk]);
        store = mockStore(initialState);
    });

    it('should amend user successfully', () => {
        const payload = { message: 'User successfully updated!', data };
        axiosMock.onPatch('users').reply(payload);
        store
            .dispatch(postDataThunkPrivate('patch', 'users', patchUserAction, userData))
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: userActionsTypes.EDIT_PROFILE_SUCCESS,
                        payload,
                    },
                ]);
            });
    });

    it('should return error', () => {
        const errors = { message: 'User successfully updated!', data };
        axiosMock.onPatch('users').reply(errors);
        store
            .dispatch(postDataThunkPrivate('patch', 'users', patchUserAction, DataError))
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: userActionsTypes.EDIT_PROFILE_SUCCESS,
                        errors,
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
