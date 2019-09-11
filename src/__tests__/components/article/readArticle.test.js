import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../../config/enzymeConfig';
import { MemoryRouter } from 'react-router-dom';
import ReadArticle, {ReadArticle as View} from '../../../components/article/readArticle';
import {ReadArticle as ReadArticleComponent} from '../../../components/article/readArticle';
import configureStore from '../../../redux/store/index';
import '../../../components/Header/Header';

jest.mock('../../../components/Header/Header', () => () => (
  <div id="mocked">hello</div>
))

const store = configureStore();

const props = {
  articles: {},
  postDataThunkPrivate: jest.fn(),
  getDataThunk: jest.fn(),
  match: { params: 3 },
  likes: 0,
  dislikes: 0,
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
  
  it('Should render', () => {
    const wrapper = shallow(
      <ReadArticleComponent {...props}/>
    );
    wrapper.setProps(props);
    wrapper.instance().handleLike();
    wrapper.instance().handleDislike();
    expect(wrapper.contains(<div></div>));
  });
});
