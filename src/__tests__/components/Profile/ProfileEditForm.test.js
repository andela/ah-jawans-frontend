import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import { ProfileEditForm } from '../../../components/Profile/ProfileEdit/ProfileEditForm/ProfileEditForm';
import user from '../../../__mocks__/user';

describe('<ProfileEditForm />', () => {
  test('renders without crashing', () => {
    const props = { profile: user };
    const component = shallow(<ProfileEditForm {...props} />);

    expect(component).toHaveLength(1);
  });
});
