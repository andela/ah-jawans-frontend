import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import HeaderUserMenu from '../../../components/Header/HeaderUserMenu/HeaderUserMenu';
import { mockStore, initialState } from '../../../__mocks__/store';

const props = {
    isAuth: true
}

describe('<HeaderUserMenu />', () => {
    test('renders without crashing', () => {
        const store = mockStore({
            ...initialState,
            userCredentials: { profile: {}, isAuth: true, errors: '' }
        });
        const component = mount(<Provider store={store}>
            <MemoryRouter>
                <HeaderUserMenu />
            </MemoryRouter>
        </Provider>);

        component.find(n => n.hasClass('logout') && n.simulate('click', {}));
        expect(component).toEqual({});
    });
});
