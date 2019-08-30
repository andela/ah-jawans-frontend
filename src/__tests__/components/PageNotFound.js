import React from 'react';
import { shallow } from '../../../config/enzymeConfig';

import PageNotFound from '../../components/PageNotFound';

describe('<Home />', () => {
  it('Should render', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toHaveLength(1);
  });
});
