import React from 'react';
import { Provider } from 'react-redux';
import { mount } from '../../../../config/enzymeConfig';
import { MemoryRouter } from 'react-router-dom';
import ReadArticle from '../../../components/article/readArticle';

import configureStore from '../../../redux/store/index';

const store = configureStore();

const props = {
    title : 'title',
    body : 'This is the body',
    getDataThunk: jest.fn(),
}

describe('<ReadArticle/>', () => {
  it('Should render', () => {
    const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}><ReadArticle {...props}/></Provider>
    </MemoryRouter>
    );
    expect(wrapper.contains(<div></div>));
  });
});
