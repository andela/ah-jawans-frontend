import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import {Home} from '../../../components/Home';
import configureStore from '../../../redux/store/index';

const store = configureStore();

const props = {articles :[{
    "title": "this is the title",
    "body": "this is the body of teh article",
    "author": {
        "username": "Joe",
    }  }]}


describe('<Home />', () => {
  it('Should render', () => {
    // const props = {props}
    const wrapper = mount(
        <MemoryRouter>
            <Provider store={store}><Home {...props}/></Provider>
        </MemoryRouter>
    );
    wrapper.setProps({props})
    expect(wrapper).toHaveLength(1);
  });
});