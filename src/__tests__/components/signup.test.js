import React from 'react';
import { expect } from 'chai';
import { shallow } from '../../../config/enzymeConfig';
import SignupComponent from '../../components/auth/Signup';
import FormContainer from '../../components/common/formContainer';
import TextInput from '../../components/common/input';
import Error from '../../components/common/errors';

let errors;
describe('<SignupComponent />', () => {
  it('Should render three <TextInput /> elements', () => {
    const wrapper = shallow(<SignupComponent />);
    expect(
      wrapper
        .find(FormContainer)
        .shallow()
        .find(TextInput),
    ).to.have.lengthOf(3);
  });
});

describe('<SignupComponent />', () => {
  it('Should contain <input/> element inside <TextInput/>', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.contains(<input />)).to.equal(true);
  });
});

describe('<Error />', () => {
  it('Should contain <span> to display error', () => {
    const wrapper = shallow(<Error errors />);
    wrapper.setProps({
      errors: { email: 'Email error' },
    });
    expect(wrapper.contains(<span>{errors}</span>)).to.equal(true);
  });
});
