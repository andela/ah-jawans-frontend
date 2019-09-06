import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import Modal from '../../components/Modal';

describe('<Modal />', () => {
  test('renders without crashing', () => {
    const component = shallow(<Modal />);
    expect(component).toHaveLength(1);
  });
});
