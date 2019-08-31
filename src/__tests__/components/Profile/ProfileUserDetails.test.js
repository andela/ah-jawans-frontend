import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../../config/enzymeConfig';
import ProfileUserDetails from '../../../components/Profile/ProfileUserDetails';
import { mockStore, initialState } from '../../../__mocks__/store';
import user from '../../../__mocks__/user';

const props = {
  userProfile: {
    firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'image.jpg'
  }
}
describe('<ProfileUserDetails />', () => {
  test('should renders without crashing ', () => {
    const component = mount(<Provider
      store={mockStore({
        ...initialState,
        userProfile: { firstName: 'shaluC', lastName: 'chandwani', username: 'shaluV', email: 'shaluchandwani@rocketmail.com', bio: 'hey there', image: 'image.jpg' }
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
