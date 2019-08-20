import React from 'react';
import { shallow, mount } from '../../../config/enzymeConfig';
import SignupComponent from '../../components/pages/Signup';
import { Signup } from '../../containers/signupContainer';
import Error from '../../components/common/errors';
import FormContainer from '../../components/common/FormContainer';
import TextInput from '../../components/common/TextInput';

const props = { errors: 'Errors here', signupSuccess: { errors: 'error' }, postDataThunk: jest.fn() };
let wrapper;

describe('<Signup />', () => {
  beforeAll(() => {
    wrapper = shallow(<Signup {...props}/>);
  });
  it('Should render <SignupComponent />  component', () => {
    expect(wrapper.find(SignupComponent)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it('Should give initial state', () => {
    expect(wrapper.state()).toBeDefined();
  });
});
describe('Input tests...', () => {
  beforeAll(() => {
    wrapper = shallow(<Signup {...props}/>);
  });
  it('should type in the Username', () => {
    wrapper = mount(<Signup {...props}/>);
    const form = wrapper.find(SignupComponent).find(FormContainer).find(TextInput);
    const username = form.find('input[name="username"]');
    expect(username).toHaveLength(1);
    username.simulate('change', {
      target: { value: 'patrick', name: 'username' },
    });
    expect(wrapper.state()).toEqual({ user: { username: 'patrick', email: '', password: '' } });
  });
  it('should type in the Email', () => {
    wrapper = mount(<Signup {...props}/>);
    const form = wrapper.find(SignupComponent).find(FormContainer).find(TextInput);
    const email = form.find('input[name="email"]');
    expect(email).toHaveLength(1);
    email.simulate('change', {
      target: { value: 'patrick@gmail.com', name: 'email' },
    });
    expect(wrapper.state()).toEqual({ user: { username: '', email: 'patrick@gmail.com', password: '' } });
  });

  it('should type in the Password', () => {
    wrapper = mount(<Signup {...props}/>);
    const form = wrapper.find(SignupComponent).find(FormContainer).find(TextInput);
    const password = form.find('input[name="password"]');
    expect(password).toHaveLength(1);
    password.simulate('change', {
      target: { value: 'Example@1', name: 'password' },
    });
    expect(wrapper.state()).toEqual({ user: { username: '', email: '', password: 'Example@1' } });
  });
  describe('submit button test...', () => {
    let instance;
    let submitButton;
    beforeAll(() => {
      instance = wrapper.instance();
      submitButton = wrapper.find('button[type="submit"]');
      submitButton.simulate('click');
    });
    it('should make a request to the server', () => {
      expect(submitButton).toHaveLength(1);
      wrapper.update();
      const event = {
        preventDefault: jest.fn(),
      };
      instance.handleSubmit(event);
    });
  });
});
