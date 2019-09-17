import reportReducer from '../../../redux/reducers/reportReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import * as types from '../../../redux/actions/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {

    test('REPORT_ARTICLES', () => {
        const reducer = reportReducer(initialState, {
            type: types.REPORT_ARTICLES, payload: { user }
        });
    });
});
