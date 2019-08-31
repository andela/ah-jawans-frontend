import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import Modal from '../../../components/Header/Notifications/Modal/Modal';

const mockStore = configureMockStore([thunk]);
const props = {
    notifications: [
        { id: 4, message: '', status: 'seen', url: 'https://res.cloudinary.com/djxhcwowp/image/upload' },
        { id: 5, message: 'hello', status: 'unseen', url: 'https://res.cloudinary.com/djxhcwowp/image/upload' }
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
                Notifications: [{ id: 4, message: '', status: 'unseen', val: 2, url: 'https://res.cloudinary.com/djxhcwowp/image/upload' },
                { id: 5, message: '', status: 'unseen', val: 1, url: 'https://res.cloudinary.com/djxhcwowp/image/upload' }],
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
    it('should call updateStatus', () => {
        const wrapper = mount(<Provider store={store}>
            <Modal store={store} {...props} />
        </Provider>);
        wrapper
            .find('#updateStatus0')
            .first()
            .simulate('click');
        jest.runAllTimers();
    });
});
