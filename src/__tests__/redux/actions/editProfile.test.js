import patchUserAction from '../../../redux/actions/user/editProfile';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should edit login user details', () => {
        const payload = {
            firstname: 'shaluVC',
        };
        const expectedAction = {
            type: userActionsTypes.EDIT_PROFILE_SUCCESS,
            payload,
        };
        expect(patchUserAction(payload)).toEqual(expectedAction);
    });
});
