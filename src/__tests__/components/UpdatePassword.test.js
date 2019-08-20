import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import { UpdatePassword } from '../../containers/updatePassword';


const props = {
  resetPassword: jest.fn(),
  history: {
    push: jest.fn(),
  },
  match: {
    params: {
      token: 'We have a token here',
    },
  },
  location: { search: 'url' },
  postDataThunk: () => Promise.resolve({}),
};
const component = shallow(<UpdatePassword {...props} />);
describe('Update password', () => {
  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });
  it('should test redirection to login page', () => {
    component.instance().componentWillReceiveProps({ resetPassword: { passwordUpdate: 'passwod' } });
  });
  it('should test handleChange function', () => {
    component.instance().handleChange({ target: { id: 2, value: 'value' } });
  });
  it('should test Change pass function', () => {
    window.alert = jest.fn();
    component.instance().changePass({ preventDefault: jest.fn() });
  });
});
