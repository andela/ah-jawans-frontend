import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import Home from '../../components/Home';

describe('<Home />', () => {
  it('Should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toHaveLength(1);
  });
});
