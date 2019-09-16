import React from 'react';
import { shallow, mount } from '../../../../config/enzymeConfig';
import { UpdateArticle, mapStateToProps } from '../../../components/article/updateArticle';

jest.mock('../../../components/Layout/Layout', () => () => (
  <div id="mockFileLayout">mockFileLayout</div>
))
localStorage.setItem('token', 'ssssssss');
const state = {
  articles: {},
  articles: { articles: { errors: {} }}
}
const props = {
  articles: { articles: {} },
  postDataThunkPrivate: jest.fn(),
  errors: { articles: { articles: {errors: ''}}},
  match: {
      params: {
        articleId: '12',
      },
    },
  userCredentials: { userCredentials: {} }
};

let wrapper
describe('<CreateArticle />', () => {
  beforeAll(() => {
    wrapper = shallow(<UpdateArticle {...props} />);
    })
    it('Should give initial state', () => {
      expect(wrapper.state()).toBeDefined();
      mapStateToProps(state);
      expect(wrapper.find('UpdateArticle')).toBeDefined();
    });
   it('should render a container-fluid class', () => {
    expect(wrapper.find('.container-fluid').length).toBe(1);
  });
it('should render a editor-wrapper class', () => {
    expect(wrapper.find('.editor-wrapper').length).toBe(1);
  });

   it('should type in title', () => {
    wrapper.setState({title: 'did i change'});
   expect(wrapper.instance().props.articles.articles.title);
  });
it('should type in tags ', () => {
    wrapper.setState({tags: 'javascript, reactjs'});
   expect(wrapper.instance().props.articles.articles.tags);
  });
  it('should change state onChange', () => {
  const title = wrapper.find('.editor-wrapper').find('#title');
  title.simulate('change', { target: { value: 'patrick' } });
  wrapper.instance().handleCKEditorChange(null, { getData: jest.fn() });
  wrapper.find('#tags').simulate('change', { target: { value: 'andela' } });
  });

  
    describe('submit button test...', () => {
      let instance
      let submitButton
      beforeAll(() => {
        instance = wrapper.instance()
        submitButton = wrapper.find('#article-button')
        submitButton.simulate('click')
      })
      it('should make a request to the server', () => {
        expect(submitButton).toHaveLength(1)
        wrapper.update()
        const event = {
          preventDefault: jest.fn(),
        }
        wrapper.setProps({
          history: { push: jest.fn() }
        });
        instance.handleSubmit(event)
      });
    });
  });
