import { optInAppAction, optOutAppAction, 
    optInEmailAction, optOutEmailAction } from '../../../redux/actions/notificationAction';
import * as types from '../../../redux/actionTypes/notificationTypes';

describe('actions', () => {
    it('should allow users to opt into in-app notifications', () => {
        const payload = {
            message: 'You have opted in to in app notifications',
        };
        const expectedAction = {
            type: types.OPT_IN_APP,
            payload,
        };
        expect(optInAppAction(payload)).toEqual(expectedAction);
    });
    it('should allow users to opt out of notifications', () => {
        const payload = {
            message: 'You have opted out of in app notifications',
        };
        const expectedAction = {
            type: types.OPT_OUT_APP,
            payload,
        };
        expect(optOutAppAction(payload)).toEqual(expectedAction);
    });
    it('should allow users to opt in to email notifications', () => {
        const payload = {
            message: 'You have opted in to email notifications',
        };
        const expectedAction = {
            type: types.OPT_IN_EMAIL,
            payload,
        };
        expect(optInEmailAction(payload)).toEqual(expectedAction);
    });
    it('should allow users to opt out of email notifications', () => {
        const payload = {
            message: 'You have opted out of email notifications',
        };
        const expectedAction = {
            type: types.OPT_OUT_EMAIL,
            payload,
        };
        expect(optOutEmailAction(payload)).toEqual(expectedAction);
    });
});
