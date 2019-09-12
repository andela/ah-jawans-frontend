import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../../config/enzymeConfig';
import { MemoryRouter } from 'react-router-dom';
import { ReadArticle as ReadArticleComponent } from '../../../components/article/readArticle';
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
  likes: 0,
  dislikes: 0,
  articles: {
    id: 1,
    username: 'Joe',
    title: 'This is title of the article',
    body: 'This is the body of the article',
    author: { username: 'shaluc' }
  },
  bookmark: { message: {} },
  errors: { errors: {} },
  match: { params: 3 },
  handleClick: jest.fn(),
}

const state = {
  id: 1,
  username: 'Joe',
  title: 'This is title of the article',
  body: 'This is the body of the article',
  author: { username: 'shaluc' },
  bookmark: { message: {} },
  errors: { errors: {} },
  postDataThunkPrivate: jest.fn(),
  getDataThunk: jest.fn(),
  match: { params: 3 },
  handleClick: jest.fn(),
  likes: 0,
  dislikes: 0,
}

describe('<ReadArticle/>', () => {
  it('Should render', () => {
    localStorage.setItem('id', ' ');
    const wrapper = mount(
      <MemoryRouter>
        <ReadArticleComponent {...props} />
      </MemoryRouter>
    );
    expect(wrapper.contains(<div></div>));
  });

  it('Should render', () => {
    const wrapper = shallow(
      <ReadArticleComponent {...props} />
    );
    wrapper.setProps(props);
    wrapper.instance().handleLike();
    wrapper.instance().handleDislike();
    expect(wrapper.contains(<div></div>));
  });

  it('Should render', () => {
    localStorage.setItem('id', '111');
    const wrapper = shallow(
      <ReadArticleComponent {...props} />
    );
    wrapper.setProps(props);
    wrapper.instance().handleLike();
    wrapper.instance().handleDislike();
    expect(wrapper.contains(<div></div>));
  });

  const component = shallow(<ReadArticleComponent {...state} />)
  it('should create <View /> snapshot ', () => {
    expect(component).toMatchSnapshot();
  });
  it('should check bookmark ', () => {
    component.instance().handleClick(49);
  });
  it('should bookmark article ', () => {
    component.setProps({ errors: 'eerrorr', bookmark: 'heypassed', body: 'hey body' });
    component.setState({ username: 'shalu', title: 'hey dear', body: 'hey body' });
    localStorage.setItem('id', '9');
    localStorage.setItem('articleId', '19');
    component
      .find('#bookmarkarticle')
      .at(0)
      .simulate('click');
    component.instance().handleClick({ errors: 'eerrorr', bookmark: 'heypassed', body: 'hey body' });
  });
});
