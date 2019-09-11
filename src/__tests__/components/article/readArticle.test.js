import React from 'react';
import { Provider } from 'react-redux';
import { mount } from '../../../../config/enzymeConfig';
import { MemoryRouter } from 'react-router-dom';
import ReadArticle, {ReadArticle as View} from '../../../components/article/readArticle';
import '../../../components/Header/Header';

jest.mock('../../../components/Header/Header', () => () => (
  <div id="mocked">hello</div>
))

const props = {
  articles: {},
  
    getDataThunk: jest.fn(),
    match: { params: 3 }
}

const state = {
  username: 'Joe',
  title: 'This is title of the article',
  body: 'This is the body of the article',
}

describe('<ReadArticle/>', () => {
  it('Should render', () => {
    const wrapper = mount(
    <MemoryRouter>
      <View {...props}/>
    </MemoryRouter>
    );
    expect(wrapper.contains(<div></div>));
  });
});
