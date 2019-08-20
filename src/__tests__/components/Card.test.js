import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Card from '../../components/Card';

describe('<Card />', () => {
  test('renders without crashing', () => {
    const component = shallow(<Card />);
    expect(component).toHaveLength(1);
  });
});
