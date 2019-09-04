import reducer from '../../redux/reducers/optInOutEmailReducer';
import * as actionTypes from '../../redux/actionTypes/notificationTypes';

let initialState;

describe('opt in Email reducer', () => {
    beforeEach(() => {
        initialState = {
        notifications: {},
        };
    });

    it('Should return the state of OPT_IN_EMAIL', () => {
        expect(reducer(initialState, {
           payload: 'you have opted in to email notifications',
           type: actionTypes.OPT_IN_EMAIL
        })).toEqual({
            notifications: { data: 'you have opted in to email notifications' },
        });
    });
    it('Should return the state of OPT_OUT_EMAIL', () => {
        expect(reducer(initialState, {
           payload: 'you have opted out of email notifications',
           type: actionTypes.OPT_OUT_EMAIL
        })).toEqual({
            notifications: { data: 'you have opted out of email notifications' },
        });
    });
});
