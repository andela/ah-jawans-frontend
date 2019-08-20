import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import PageNotFound from '../../components/PageNotFound';

describe('<PageNotFound />', () => {
  test('renders without crashing', () => {
    const component = shallow(<PageNotFound />);
    expect(component).toHaveLength(1);
  });
});
