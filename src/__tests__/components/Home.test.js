import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from '../../../config/enzymeConfig';

import Home, { mapStateToProps } from '../../components/Home';
import configureStore from '../../redux/store/index';

const store = configureStore();
const state = {
  articles: {articles: []}
}
describe('<Home />', () => {
  it('Should render', () => {
    const wrapper = shallow(<Provider store={store}><Home /></Provider>);
    mapStateToProps(state)
    expect(wrapper).toHaveLength(1);
  });
}); 
