import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import Profile from '../../../components/Profile';
import { mockStore, initialState } from '../../../__mocks__/store';

localStorage.setItem('image', 'null');

describe('<Profile />', () => {
    test('renders without crashing', () => {
        const component = mount(<Provider store={mockStore({
            ...initialState,
            userCredentials: { userCredentials: {} },
            notification: [{ id: 111, message: '', status: 'false' }],
            signupSuccess: {},
            followerData: {},
        })
        }>
            <MemoryRouter>
                <Profile />
            </MemoryRouter>
        </Provider >);

        expect(component).toHaveLength(1);
    });
});
