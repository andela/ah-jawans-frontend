import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import Header from '../../../components/Header';
import { mockStore, initialState } from '../../../__mocks__/store';
import mockWindow from '../../../__mocks__/window';

describe('<Header />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={mockStore({
      ...initialState,
      userCredentials: { userCredentials: {} },
      notification: [{ id: 111, message: '', status: 'false' }]
    })}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>);

    const headerUserButton = component.find('Header .header-user-button');

    headerUserButton.simulate('click', {});
    mockWindow.document.event({
      name: 'click',
      srcElement: {
        parentNode: { classList: { contains: jest.fn(() => false) } },
        classList: { contains: jest.fn(() => false) }
      }
    });

    expect(component).toHaveLength(1);
  });
  test('renders without crashing', () => {
    const component = mount(<Provider store={mockStore({
      ...initialState,
      userCredentials: { userCredentials: {} },
      notification: [{ id: 111, message: '', status: 'false' }]
    })}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>);

    component.find('button[id="toggleUserMenuButton"]').simulate('click');
    expect(component).toHaveLength(1);
  });
});
