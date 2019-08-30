import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from '../../../config/enzymeConfig';
import SocialLogin from '../../components/socialLogin';

const wrapper = shallow(<SocialLogin />);

global.window = Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    replace: jest.fn(),
  },
});

const { replace } = window.location;
beforeAll(() => {
  Object.defineProperty(window.location, 'replace', {
    configurable: true,
  });
  window.location.replace = jest.fn();
});

afterAll(() => {
  window.location.replace = replace;
});

describe('<Img />', () => {
  it('renders social login', () => {
    expect(wrapper.find('img').length).toBe(3);
    expect(wrapper.find('#facebook').length).toBe(1);
    expect(wrapper.find('#google').length).toBe(1);
    expect(wrapper.find('#twitter').length).toBe(1);
  });

  it('checks social login', () => {
    const loginPage = mount(
      <MemoryRouter>
        <SocialLogin />
      </MemoryRouter>,
    ).find('img').length;
    expect(loginPage).toEqual(3);
  });

  it('mocks method for window replace', () => {
    expect(jest.isMockFunction(window.location.replace)).toBe(true);
  });

  it('use the method on click event ', () => {
    wrapper.find('#facebook').simulate('click');
    window.location.replace();
    expect(window.location.replace).toHaveBeenCalled();
  });
});
