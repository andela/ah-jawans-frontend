jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { postDataThunkPrivate, axiosInstance } from '../../../redux/thunks';
import uploadUserProfile from '../../../redux/actions/user/uploadImage';
import { userActionsTypes } from '../../../redux/actionTypes/userActionsTypes';
import stores from '../../../redux/store/index';

describe('auth actions', () => {
    let axiosMock;
    let store;
    let data;
    const initialState = {
        uploadImage: {},
        errors: null,
    };
    const userData = {
        image: 'image.jpg',
    };

    beforeEach(() => {
        axiosMock = new MockAdapter(axiosInstance);
        const mockStore = configureStore([thunk]);
        store = mockStore(initialState);
    });

    it('should upload profile successfully', () => {
        const payload = { message: 'User successfully updated!', data };
        axiosMock.onPatch('users').reply(payload);
        store
            .dispatch(postDataThunkPrivate('patch', 'users', uploadUserProfile, userData))
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
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
