import getUserAction from '../../../redux/actions/user/getUser';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should get login user details', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: userActionsTypes.GET_USER_SUCCESS,
            payload,
        };
        expect(getUserAction(payload)).toEqual(expectedAction);
    });
});