import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Form } from '../../../components/common';

describe('<Form />', () => {
  test('renders without crashing', () => {
    const props = {
      formTitle: 'wkefuh'
    }
    const component = mount(<Form {...props}/>);
    const form = component.find('form');

    form.simulate('submit', {});
    expect(component).toHaveLength(1);
  });
});
