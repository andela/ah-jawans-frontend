import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import { ProfileEditForm } from '../../../components/Profile/ProfileEdit/ProfileEditForm/ProfileEditForm';
import user from '../../../__mocks__/user';
import { getMaxListeners } from 'cluster';


const props = {
  editProfile: jest.fn(),
  user: {},
  profile: {firstName: '', lastName: '', username:'', email: '', bio:''},
  formData: {username: 'fekw'}
}
describe('<ProfileEditForm />', () => {
  test('renders without crashing', () => {
    const component = shallow(<ProfileEditForm {...props} />);

    expect(component).toHaveLength(1);
  });

  test('displays an error if the email is already used', () => {
    const component = shallow(<ProfileEditForm {...props} />);
    component.setProps({ errors: { email: 'email already used' } });
  });

  test('displays success message if the profile was successfully updated', () => {
    const component = shallow(<ProfileEditForm {...props} />);
    component.setProps({ message: 'profile successfully updated' });
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<ProfileEditForm {...props} />);
    component.setProps({ errors: { message: 'Network error' } });
  });
});
