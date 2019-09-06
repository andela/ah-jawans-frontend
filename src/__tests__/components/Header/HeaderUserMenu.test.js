import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import HeaderUserMenu from '../../../components/Header/HeaderUserMenu/HeaderUserMenu';
import { mockStore, initialState } from '../../../__mocks__/store';

const props = {
    username: 'ShaluC'
}
localStorage.setItem('username', 'shaluC');

describe('<HeaderUserMenu />', () => {
    test('renders without crashing', () => {
        const store = mockStore({
            ...initialState,
        userCredentials: { userCredentials: { } }  
    });
    const component = mount(<Provider store={store}>
        <MemoryRouter>
            <HeaderUserMenu {...props}/>
        </MemoryRouter>
    </Provider>);

    component.findWhere(n => n.hasClass('logout') && n.simulate('click', {}));  
expect(component).toEqual({});
});
});
