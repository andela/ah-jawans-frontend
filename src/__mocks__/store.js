import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import initialState from '../redux/store';
import { postDataThunk, getDataThunk, postDataThunkPrivate } from '../redux/thunks/index';

export { initialState };
export const middlewares = [thunk, { postDataThunk, getDataThunk, postDataThunkPrivate }];
export const mockStore = configureMockStore({ postDataThunk, getDataThunk, postDataThunkPrivate });

export default mockStore(initialState);
