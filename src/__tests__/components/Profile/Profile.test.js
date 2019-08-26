import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import Profile from '../../../components/Profile';
import { mockStore, initialState } from '../../../__mocks__/store';

describe('<Profile />', () => {
    test('renders without crashing', () => {
        const component = mount(<Provider store={mockStore({
            ...initialState,
            userCredentials: { profile: {} },
            signupSuccess: {}
        })}>
            <MemoryRouter>
                <Profile />
            </MemoryRouter>
        </Provider>);

        expect(component).toHaveLength(1);
    });
});
