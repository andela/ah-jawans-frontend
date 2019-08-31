import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import initialState from '../redux/store';
import { postDataThunk, getDataThunk, postDataThunkPrivate, getDataThunkPrivate } from '../redux/thunks/index';

export { initialState };
export const middlewares = [thunk, { postDataThunk, getDataThunk, postDataThunkPrivate, getDataThunkPrivate }];
export const mockStore = configureMockStore({ postDataThunk, getDataThunk, postDataThunkPrivate, getDataThunkPrivate });

export default mockStore(initialState);
