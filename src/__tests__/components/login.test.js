import React from 'react';
import { expect } from 'chai';
import { shallow } from '../../../config/enzymeConfig';
import LoginComponent from '../../components/auth/Login';
import FormContainer from '../../components/common/formContainer';
import Input from '../../components/common/input';
import Error from '../../components/common/errors';

let errors;

describe('<LoginComponet />', () => {
  it('Should render two <Input /> elements', () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper.find(FormContainer).shallow().find(Input)).to.have.lengthOf(2);
  });
});

describe('<Input />', () => {
  it('Should contain input', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.contains(<input/>)).to.equal(true);
  });
});

describe('<Error />', () => {
  it('Should contain <span> to display error', () => {
    const wrapper = shallow(<Error errors/>);
    wrapper.setProps({ errors: { email: 'Email error' } });
    expect(wrapper.contains(<span>{ errors }</span>)).to.equal(true);
  });
});
