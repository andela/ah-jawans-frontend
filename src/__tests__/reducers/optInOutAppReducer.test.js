import reducer from '../../redux/reducers/optInOutAppReducer';
import * as actionTypes from '../../redux/actionTypes/notificationTypes';

let initialState;

describe('opt in App reducer', () => {
    beforeEach(() => {
        initialState = { 
        notifications: { data: 'you have opted in to in-app notifications' },
        data:{},
        };
    });

    it('Should return the state of OPT_IN_APP', () => {
        expect(reducer(initialState, {
           payload: { data: 'you have opted in to in-app notifications'},
           type: actionTypes.OPT_IN_APP
        })).toEqual({
            notifications: { data: 'you have opted in to in-app notifications' },
            data:{},
        });
    });
    it('Should return the state of OPT_OUT_APP', () => {
        expect(reducer(initialState, {
           payload: { data: 'you have opted out of in-app notifications'},
           type: actionTypes.OPT_OUT_APP
        })).toEqual({
            notifications: { data: 'you have opted out of in-app notifications' },
            data:{},
        });
    });
});
