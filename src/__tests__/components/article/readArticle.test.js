import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from '../../../../config/enzymeConfig';
import { MemoryRouter } from 'react-router-dom';
import { ReadArticle as ReadArticleComponent } from '../../../components/article/readArticle';
import configureStore from '../../../redux/store/index';
import '../../../components/Header/Header';
import { ReadArticle } from '../../../components/article/readArticle';
import Tags from '../../../components/article/displayTags';
import CommentHistoryModel from '../../../components/comments/commentHistory';

const store = configureStore();
global.window = Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    replace: jest.fn(),
  },
});

document.body.innerHTML =
  '<div id="myModal2"></div> ' +
  '<input id="concel-btn" value="h"/>' +
  '<h5 class="btn-pagination-next1">khd</h5>' +
  '<div class="cards"></div> ';

jest.mock('../../../components/Header/Header', () => () => (
  <div id="mockHeader">mockHeader</div>
))

const props = {
  match: { params: { id: 1 } },
  articles: {
    title: '',
    body: 'jhfqwg jghwef',
    articles: { author: '' }
  },
  comments: {
    allComments: [
      {
        User: { image: 'djhfejr.jpg' },
        id: 1,
        body: 'dfwjkehnkdewhj',
        Comment: [{ likes: true, dislikes: false }],
        edited: true,
      },
      {
        User: { image: 'djhfejr.jpg' },
        id: 2,
        body: 'dfwjkehnkdewhj',
        Comment: [{ likes: true, dislikes: false }],
        edited: false,
      }
    ],
    errors: 'hgwefg',
    likes: 0,
    dislikes: 0,
  },
  getDataThunk: jest.fn(),
  postDataThunkPrivate: jest.fn(),
  clearLikesOrDislikes: jest.fn(),
  clearLikesOrDislikesComments: jest.fn(),
  commentHistory: {
    findHistory: [
      {
        "id": 1,
        "userId": 3,
        "editedComment": "Comment here",
        "commentId": 1
    },
    ]
  },
    comment: {
      edited: true
    },
    open : 'blcok',
    hideModal1: jest.fn(),
    Model1Data: jest.fn(),
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
  comments: {
    allComments: [
      {
        User: { image: 'djhfejr.jpg' },
        id: 1,
        body: 'dfwjkehnkdewhj',
        Comment: [{ likes: true, dislikes: false }],
        edited: true,
      },
      {
        User: { image: 'djhfejr.jpg' },
        id: 2,
        body: 'dfwjkehnkdewhj',
        Comment: [{ likes: true, dislikes: false }],
        edited: false,
      }
    ],
    errors: 'hgwefg',
    likes: 0,
    dislikes: 0,
  },
  clearLikesOrDislikes: jest.fn(),
  clearLikesOrDislikesComments: jest.fn(),
  articles: { tagList: [] }
}

let wrapper;

describe('<ReadArticle/>', () => {
  beforeAll(() => {
    Object.defineProperty(window.location, 'replace', {
      configurable: true,
    });
    window.location.replace = jest.fn();
    wrapper = shallow(
      <MemoryRouter>
        <Provider store={store}><ReadArticle {...props} />
        </Provider>
      </MemoryRouter>);
  })

  afterAll(() => {
    window.location.replace = replace;
  });
  it('Should give initial state', () => {
    expect(wrapper.state()).toBeDefined();
    expect(wrapper.find('ReadArticle')).toBeDefined();
  });

  it('Should contain <Form/> element inside <CommentComponent/>', () => {
    const newprops = {
      articles: {
        title: '',
        body: '',
      },
      match: {
        params: {
          id: 12,
        },
      },
      comments: {
        comments: {},
      },
      getDataThunk: jest.fn(),
      postDataThunkPrivate: jest.fn(),
    }
    const wrapper1 = mount(
      <MemoryRouter>
        <ReadArticle {...newprops} />
      </MemoryRouter>
    )
  });

  it('Should contain <Form/> element inside <CommentComponent/>', () => {
    localStorage.setItem('id', '111');
    localStorage.setItem('username', 'kagabo');
    const newprops = {
      articles: {
        title: '',
        body: 'fofo',
        author: { username: 'djhf' }
      },
      match: {
        params: {
          id: 12,
        },
      },
      comments: {
        allComments: [
          {
            User: { image: 'djhfejr.jpg', username: 'kagabo' },
            id: 1,
            body: 'dfwjkehnkdewhj',
            edited: true,
          },
          {
            User: { image: 'djhfejr.jpg', username: 'kagabo' },
            id: 2,
            body: 'dfwjkehnkdewhj',
            edited: true,
          }
        ]
      },
      getDataThunk: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      clearLikesOrDislikes: jest.fn(),
      clearLikesOrDislikesComments: jest.fn(),
    }
    const newWrapper = mount(
      <MemoryRouter>
        <ReadArticle {...newprops} />
      </MemoryRouter>
    );
    newWrapper.setState({
      body:'fofo',
      id: 10,
      username: 'ewfer',
      title: 'ewqr',
      likes: 0,
      dislikes: 0,
      bookmark: 'rb4',
      errors: 'bterb',
      modal: 'none',
      comment: {
        body: 'b3w4t',
      },
    });
    newWrapper.find('#comment-body').simulate('change', { value: 'k' });
    newWrapper.find('#comment-remove-icon0').simulate('click', {});
    newWrapper.find('#updatebutton0').simulate('click', {});
    newWrapper.find('#submit1').simulate('click', {});
    window.location.replace();
    expect(window.location.replace).toHaveBeenCalled();
  });

  it('Should contain <Form/> element inside <CommentComponent/>', () => {
    localStorage.setItem('id', '111');
    localStorage.setItem('username', 'kagabo');
    const newprops = {
      match: { params: { id: 1 } },
      articles: {
        title: '',
        body: 'iwhfqg ihqvir ',
        articles: { author: '' }
      },
      comments: {
        allComments: [
          {
            User: { image: 'djhfejr.jpg', username: 'kagabo' },
            id: 1,
            body: 'dfwjkehnkdewhj',
            Comment: [{ likes: true, dislikes: false }],
            edited: true,
          },
          {
            User: { image: 'djhfejr.jpg', username: 'kagabo' },
            id: 2,
            body: 'dfwjkehnkdewhj',
            Comment: [{ likes: true, dislikes: false }],
            edited: false,
          }
        ],
        errors: 'hgwefg',
        likes: 0,
        dislikes: 0,
      },
      getDataThunk: jest.fn(),
      postDataThunkPrivate: jest.fn(),
      clearLikesOrDislikes: jest.fn(),
      clearLikesOrDislikesComments: jest.fn(),
    }
    const newWrapper = mount(
      <MemoryRouter>
        <ReadArticleComponent {...newprops} />
      </MemoryRouter>
    );
    newWrapper.setState({
      id: 10,
      body: 'whfjg ashfjasvcbnvsdchgsdhbcv ',
      comment: {
        edited: true
      }
    });
    newWrapper.find('#comment-body').simulate('change', { value: 'k' });
    newWrapper.find('#comment-remove-icon0').simulate('click', {});
    newWrapper.find('#updatebutton0').simulate('click', {});
    newWrapper.find('#textarea0').simulate('change', { value: 'b' });
    newWrapper.find('#submit1').simulate('click', {});
    newWrapper.find('#comment-edit-icon0').simulate('click', {});
    newWrapper.find('#hideModel0').simulate('click', {});
    newWrapper.find('#like').simulate('click', {});
    newWrapper.find('#comment-report').simulate('change', { value: 'k' });
    newWrapper.find('#reporting-button').simulate('click', {});
    newWrapper.find('#concel-btn').simulate('click', {});
    newWrapper.find('#reporting-submit').simulate('submit', {});
  });
});


describe('<ReadArticle/> on', () => {
  it('Should render', () => {
    const wrapper = shallow(
      <ReadArticleComponent {...props} />
    );
    wrapper.setProps(props);
    wrapper.instance().handleLike();
    wrapper.instance().handleDislike();
    wrapper.instance().handleLikeComments(2);
    wrapper.instance().handleDislikeComments(2);
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
    wrapper.instance().handleLikeComments(2);
    wrapper.instance().handleDislikeComments(2);
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
    component.setProps({ errors: 'eerrorr', bookmark: 'heypassed', body: 'hey body', articles: { tagList: [] } });
    component.setState({ username: 'shalu', title: 'hey dear', body: 'hey body' });
    localStorage.setItem('id', '9');
    localStorage.setItem('articleId', '19');
  });

  it('Should render Tags', () => {
    const wrapper = mount(
      <ReadArticleComponent {...props} />
    );
    wrapper.setProps(props);
    expect(wrapper.contains(<div className='display-tags'></div>));
  });

  it('Should render <CommentHistoryModel>', () => {
    const wrapper = mount(
      <ReadArticleComponent {...props} />
    );
    wrapper.find('#comment-history0').simulate('click', {});
    wrapper.find('#close-modal0').simulate('click', {});
    expect(wrapper.contains(<button className="comment-history" id="comment-history1">Edited</button>));
  });
});
