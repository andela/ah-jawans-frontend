jest.unmock('axios');
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import { postDataThunk,
  postDataThunkPrivate,
  axiosInstance,
  getDataThunk } from '../../../redux/thunks';
import loginUserAction from '../../../redux/actions/auth/loginAction';
import {getAUthorArticlesAction} from '../../../redux/actions/user/getUser';
import { LOGIN_USER, GET_ARTICLES } from '../../../redux/actions/actionTypes';
import stores from '../../../redux/store/index';
import userActionsTypes from '../../../redux/actionTypes';
import getArticlesAction from '../../../redux/actions/getArticlesAction';

describe('auth actions', () => {
    let axiosMock
    let store
    const initialState = {
        userCredentials: {},
        errors: null,
    }
    const userData = {
        email: 'joe@gmail.com',
        password: 'Joe@123',
    }

    const empty = {
        email: '',
        password: '',
    }

    beforeEach(() => {
        axiosMock = new MockAdapter(axiosInstance)
        const mockStore = configureStore([thunk])
        store = mockStore(initialState)
    })

    it('should login user successfully', () => {
        const payload = { message: 'Logged in successfully' }
        axiosMock.onPost('users/login').reply(200, payload)
        store
            .dispatch(
                postDataThunk('post', 'users/login', loginUserAction, userData)
            )
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: LOGIN_USER,
                        payload,
                    },
                ])
            })
    })

    it('should return error', () => {
        const errors = { message: 'Logged in successfully' }
        axiosMock.onPost('users/login').reply(404, errors)
        store
            .dispatch(
                postDataThunk('post', 'users/login', loginUserAction, empty)
            )
            .then(() => {
                expect(store.getActions()).toEqual([
                    {
                        type: LOGIN_USER,
                        errors,
                    },
                ])
            })
    })

  it('should get articles', () => {
    const payload = { status: 200, response: {data:{}} };
    axiosMock.onGet('articles').reply(payload);
    store
        .dispatch(getDataThunk('get', 'articles', getArticlesAction))
        .then(() => {
            expect(store.getArticlesAction(payload)).toEqual([
                {
                    type: GET_ARTICLES,
                    payload,
                },
            ]);
        });
});

    it('it should return new state', () => {
        const localStore = stores({})
        expect(localStore).toHaveProperty('dispatch')
        expect(localStore).toHaveProperty('subscribe')
        expect(localStore).toHaveProperty('getState')
        expect(localStore).toHaveProperty('replaceReducer')
    })
})
