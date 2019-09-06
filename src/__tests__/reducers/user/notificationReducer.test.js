import notificationReducer from '../../../redux/reducers/user/notificationReducer';
import initialState from '../../../redux/store/initialStates/userInitialState';
import { userActionsTypes } from '../../../redux/actionTypes';
import user from '../../../__mocks__/user';

describe('User reducers', () => {
    test('NOTIFICATION TESTS', () => {
        const reducer = notificationReducer(initialState, {
            type: userActionsTypes.GET_NOTIFICATION_SUCCESS,
            payload: { user }
        });

        const reducer2 = notificationReducer(initialState, {
            type: userActionsTypes.UPDATE_NOTIFICATION_STATUS,
            payload: { user }
        });
    });
});
