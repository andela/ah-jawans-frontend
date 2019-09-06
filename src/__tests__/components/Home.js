import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from '../../../config/enzymeConfig';
import Home from '../../components/Home';
import configureStore from '../../redux/store/index';
const store = configureStore();
describe('<Home />', () => {
 it('Should render', () => {
   const wrapper = shallow(<Provider store={store}><Home /></Provider>);
   expect(wrapper).toHaveLength(1);
 });
});
