import { getNotificationsAction, ReadNotificationsAction } from '../../../redux/actions/user/notifications';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should get unseen notifications of user details', () => {
        const payload = {
            id: 111,
        };
        const expectedAction = {
            type: userActionsTypes.GET_NOTIFICATION_SUCCESS,
            payload,
        };
        expect(getNotificationsAction(payload)).toEqual(expectedAction);
    });

    it('should update unseen notifications of user details to seen', () => {
        const payload = {
            id: 111,
            val: 1,
        };
        const expectedAction = {
            type: userActionsTypes.UPDATE_NOTIFICATION_STATUS,
            payload,
        };
        expect(ReadNotificationsAction(payload)).toEqual(expectedAction);
    });
});
