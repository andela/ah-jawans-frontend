import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import searchAction from '../../../redux/actions/searchAction';
import * as types from '../../../redux/actions/actionTypes';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe(' /actions', () => {
  it('it should find actions search', () => {
    const data = {
      type: types.SEARCH_ARTICLES,
      payload: {},
    };
    expect(store.dispatch(searchAction({}))).toEqual(data);
  });
});
