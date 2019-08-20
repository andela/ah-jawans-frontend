import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Home from '../../components/Home';

const component = shallow(<Home/>);

describe('Home page component', () => {
  it('test home page', () => {
    expect(component.find('div')).toHaveLength(1);
  });
});
