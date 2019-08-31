import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from '../../../../config/enzymeConfig';
import GetNotifications from '../../../components/Header/Notifications/GetNotifications';

const mockStore = configureMockStore([thunk]);
const props = {
    notification: {
        loading: false,
        message: {},
        errors: {},
    }
};
describe('Notification test', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            notification: {
                notifications: [{ id: 111, message: '', status: 'false' }]
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
});
