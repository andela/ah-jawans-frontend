import React from 'react';
import { shallow } from '../../../config/enzymeConfig';
import App from '../../components/App';

describe('<App />', () => {
  it('should renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
