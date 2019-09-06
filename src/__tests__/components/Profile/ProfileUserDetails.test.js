import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import ProfileUserDetails from '../../../components/Profile/ProfileUserDetails';
import { mockStore, initialState } from '../../../__mocks__/store';


const props = { 
  getUser: {
    firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'https://image.jpg',  articles: [{
      "title": "this is the title",
      "body": "this is the body of teh article",
      "author": {
          "username": "Joe",
      }
  }],
  },
  userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} }
}


describe('<ProfileUserDetails />', () => { 
  test('should renders without crashing ', () => {
    const component = mount(<Provider
      store={mockStore({
        ...initialState,
        getUser: { firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'https://image.jpg', articles:[{
          "title": "this is the title",
          "body": "this is the body of teh article",
          "author": {
              "username": "Joe",
          }
      }] },
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} }
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
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} }
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
        userCredentials: { ...initialState.user, uploadImage: {}, editProfile: {} }
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
});
