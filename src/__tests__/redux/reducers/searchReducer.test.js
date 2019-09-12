import searchReducer from '../../../redux/reducers/searchReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import * as types from '../../../redux/actions/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {

    test('EDIT_PROFILE_SUCCESS', () => {
        const reducer = searchReducer(initialState, {
            type: types.SEARCH_ARTICLES, payload: { user }
        });
    });
});
