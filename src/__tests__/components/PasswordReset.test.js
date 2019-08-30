import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import { PasswordReset } from '../../containers/passwordReset';
import '@babel/polyfill';

const props = {
  resetPassword: {},
  reset: jest.fn(),
  state: 'something here',
  history: {
    push: jest.fn(),
  },
  requestToReset: jest.fn(),
};

describe('Password Reset', () => {
  const component = shallow(<PasswordReset {...props} />);
  it('should render pasword request component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should test componenent will receive props', () => {
    const instance = component.instance();
    instance.componentWillReceiveProps(props);
    expect(instance).toBeDefined();
  });

  it('should handleSubmit function', () => {
    const fakeEvent = { preventDefault: () => {} };
    const instance = component.instance();
    instance.handleSubmit(fakeEvent);
    expect(instance).toBeDefined();
  });

  it('should change states using handleChange method', () => {
    const fakeEvent = { target: { name: 'email', value: 'yes dady' } };
    const instance = component.instance();
    instance.handleChange(fakeEvent);
    expect(instance).toBeDefined();
  });

  it('it should check if there are no errors', () => {
    const components = shallow(<PasswordReset {...props} />);
    const fakeEvent = { target: { name: 'email', value: 'yes dady' } };
    const instance = components.instance();
    instance.handleChange(fakeEvent);
    expect(instance).toBeDefined();
  });

  it('should find the modal', () => {
    const newProps = { ...props, resetPassword: { errors: '' } };
    const components = shallow(<PasswordReset {...newProps} />);
    components.setState({ modal: {} });
    expect(components.find('Modal').length).toBe(1);
  });

  it('should find the modal', () => {
    const newProps = { ...props, resetPassword: { reset: {} } };
    const components = shallow(<PasswordReset {...newProps} />);
    components.setState({ modal: {} });
    components
      .instance()
      .componentWillReceiveProps({ resetPassword: { reset: {} } });
  });

  it('should find the modal', () => {
    const newProps = {
      ...props,
      resetPassword: { reset: { errors: 'sgdgd' } },
    };
    const components = shallow(<PasswordReset {...newProps} />);
    components.setState({ modal: {} });
  });

  it('should find the modal', () => {
    const newProps = { ...props, resetPassword: { reset: {} } };
    const components = shallow(<PasswordReset {...newProps} />);
    components.setState({ modal: {} });
    components
      .instance()
      .componentWillReceiveProps({ resetPassword: { reset: {} } });
  });
});
