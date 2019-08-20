/* eslint-disable import/no-named-as-default */
import React from 'react';
import { expect } from 'chai';
import { shallow } from '../../../config/enzymeConfig';
import SignupComponet from '../../components/pages/Signup';
import FormContainer from '../../components/common/FormContainer';
import TextInput from '../../components/common/TextInput';
import Error from '../../components/common/errors';

let errors;
describe('<SignupComponet />', () => {
  it('Should render three <TextInput /> elements', () => {
    const wrapper = shallow(<SignupComponet />);
  });
});

describe('<SignupComponet />', () => {
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
