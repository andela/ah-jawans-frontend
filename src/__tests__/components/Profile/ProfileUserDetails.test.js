import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../../config/enzymeConfig';
import ProfileUserDetails, { ProfileUserDetails as ProfileUserDetailsComponent } from '../../../components/Profile/ProfileUserDetails/ProfileUserDetails';
import { mockStore, initialState } from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

const props = {
  userProfile: {
    ...user,
    Opts: [{
      type: 'email',
    }]
  },
  postDataThunkPrivate: jest.fn(),
  getUser: {
    firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'https://image.jpg'
  },
  userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} }
}

describe('<ProfileUserDetails />', () => {
  test('should renders without crashing ', () => {
    const component = mount(<Provider
      store={mockStore({
        ...initialState,
        getUser: { firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'https://image.jpg' },
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} },
        followerData:{followerNumber:0, followingNumber: 0},

      })}
    >
      <MemoryRouter>
        <ProfileUserDetails {...props} />
      </MemoryRouter>
    </Provider>);
    const buttons = component.find('.ProfileUserDetails button');
    buttons.map(btn => btn.simulate('click', {}));
    expect(component).toHaveLength(1);
  });
  test('should renders without crashing ', () => {
    const component = mount(<Provider
      store={mockStore({
        ...initialState,
        getUser: { firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'image.jpg' },
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} },
        followerData:{followerNumber: 0, followingNumber: 0},
      })}
    >
      <MemoryRouter>
        <ProfileUserDetails {...props} />
      </MemoryRouter>
    </Provider>);
    const buttons = component.find('.ProfileUserDetails button');
    buttons.map(btn => btn.simulate('click', {}));
    expect(component).toHaveLength(1);
  });
  test('should renders without crashing ', () => {
    const component = mount(<Provider
      store={mockStore({
        ...initialState,
        getUser: { firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: '' },
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} },
        followerData:{followerNumber: 0, followingNumber: 0},
      })}
    >
      <MemoryRouter>
        <ProfileUserDetails {...props} />
      </MemoryRouter>
    </Provider>);
    const buttons = component.find('.ProfileUserDetails button');
    buttons.map(btn => btn.simulate('click', {}));
    expect(component).toHaveLength(1);
  });

  test('should renders without crashing ', () => {
    const component = shallow(<ProfileUserDetailsComponent {...props} />);
    component.setProps(props);
    component.instance().handleAppChange();
    component.instance().handledAppChange();
    component.instance().handleEmailChange();
    component.instance().handledEmailChange();
    
    const buttons = component.find('Button[buttonClass*="button"]');
    
    buttons.map(btn => {
      btn.simulate('click', {});
    });
    
    expect(component).toHaveLength(1);
  });
});
