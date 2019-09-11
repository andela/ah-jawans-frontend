import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import GetNotifications from '../../../components/Header/Notifications/getNotifications';

const mockStore = configureMockStore([thunk]);
const props = {
    notification: {
        loading: false,
        message: {},
        errors: {},
    }
};
const props1 = {
    notification: {
        Notifications: [
            { id: 4, message: 'hey there', status: 'seen' },
            { id: 5, message: 'hey there dear', status: 'unseen' }
        ]
    }
}
describe('Notification test', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            notification: {
                Notifications: [{ id: 111, message: 'hey there', status: 'unseen' }]
            }
        });
    });

    it('should not call closeModal', () => {
        const wrapper = mount(<Provider store={store}>
            <GetNotifications store={store} {...props} />
        </Provider>);
    });
    it('should not call displayModal', () => {
        const wrapper = mount(<Provider store={store}>
            <GetNotifications store={store} {...props} />
        </Provider>)

        wrapper.find('.button').simulate('click');
    });
    it('should call displayModal', () => {
        const wrapper = mount(<Provider store={store}>
            <GetNotifications store={store} {...props1} />
        </Provider>)

        wrapper.find('.button').simulate('click', { preventDefault: jest.fn() });
    });
});
