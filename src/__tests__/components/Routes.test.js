import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store from '../../__mocks__/store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
import Profile from '../../components/Profile';

describe('<Routes />', () => {
  test('renders <Home /> without crashing', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Routes />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Home)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/profile']}>
        <Routes isAuth={true} />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/profile?email=email@email.com']}>
        <Routes isAuth={true} />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

  test('renders <Profile /> without crashing', () => {
    const component = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/profile?token=401']}>
        <Routes isAuth={true} />
      </MemoryRouter>
    </Provider>);
    expect(component.find(Profile)).toHaveLength(1);
  });

});
