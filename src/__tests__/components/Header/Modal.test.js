import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import Modal from '../../../components/Header/Notifications/Modal/Modal';

const mockStore = configureMockStore([thunk]);
const props = {
    notifications: [
        { id: 4, message: '', status: 'seen' },
        { id: 5, message: 'hello', status: 'unseen' }
    ]
};
let store;

describe('Notification test', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    beforeEach(() => {
        jest.useFakeTimers();
        store = mockStore({
            notification: {
                Notifications: [{ id: 4, message: '', status: 'unseen', val: 2 },
                { id: 5, message: '', status: 'unseen', val: 1 }],
            }
        });
    });
    it('should fire update notification', () => {
        const wrapper = mount(<Provider store={store}>
            <Modal store={store} {...props} />
        </Provider>);
        wrapper
            .first()
            .simulate('click');
        jest.runAllTimers();
    });
});
