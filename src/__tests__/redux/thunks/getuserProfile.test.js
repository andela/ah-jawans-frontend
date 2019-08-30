jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { getDataThunk, axiosInstance } from '../../../redux/thunks';
import getUserAction from '../../../redux/actions/user/getUser';
import { userActionsTypes } from '../../../redux/actionTypes';
import stores from '../../../redux/store/index';

describe('auth actions', () => {
    let axiosMock;
    let store;
    let getUser;
    const initialState = {
        getUser: {},
        errors: null,
    };

    beforeEach(() => {
        axiosMock = new MockAdapter(axiosInstance);
        const mockStore = configureStore([thunk]);
        store = mockStore(initialState);
    });

    it('should display user successfully', () => {
        const payload = { ...getUser };
        axiosMock.onGet('user/shaluooooooooo').reply(payload);
        store
            .dispatch(getDataThunk('get', 'user/shaluooooooooo', getUserAction))
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: userActionsTypes.GET_USER_SUCCESS,
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
