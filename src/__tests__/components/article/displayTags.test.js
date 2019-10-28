import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import Tags from '../../../components/article/displayTags';

describe('<Tags />', () => {
    test('renders tags', () => {
      const component = shallow(<Tags />);
      expect(component).toHaveLength(1);
    });
  });
