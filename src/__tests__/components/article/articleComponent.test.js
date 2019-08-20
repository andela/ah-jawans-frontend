import React from 'react';
import '@ckeditor/ckeditor5-react';
import { shallow, mount } from '../../../../config/enzymeConfig';
import { CreateArticle } from '../../../components/article/ArticleComponent';

jest.mock('../../../components/Header/Header', () => () => (
  <div id="mockFileLayout">mockFileLayout</div>
))
jest.mock('@ckeditor/ckeditor5-react', () => () => { 
  <div id="ckeditor">ckeditor</div>
});

global.MutationObserver = class {
  constructor() {}

  disconnect() {}

  observe() {}
};

const props = {
  article: { article: {} },
  postDataThunkPrivate: jest.fn(),
  errors: { article: { article: {errors: ''}}},
  userCredentials: { userCredentials: {} }
};

let wrapper
describe('<CreateArticle />', () => {
  beforeAll(() => {
    wrapper = shallow(<CreateArticle {...props} />);
    })
    it('Should give initial state', () => {
      expect(wrapper.state()).toBeDefined();
      expect(wrapper.find('CreateArticle')).toBeDefined();
    });
    
     it('should render a container-fluid class', () => {
    expect(wrapper.find('.container-fluid').length).toBe(1);
  });
 it('should render a editor-wrapper class', () => {
    expect(wrapper.find('.editor-wrapper').length).toBe(1);
  });

 it('should type in title', () => {
    wrapper.setState({title: 'did i change'});
   expect(wrapper.instance().props.article.article.title);
  });
it('should type in tags', () => {
    wrapper.setState({tags: 'javascript, reactjs'});
  expect(wrapper.instance().props.article.article.tags);
});
  it('should type in body', () => {
    wrapper.setState({body: ''});
  expect(wrapper.instance().props.article.article.body);
  });
  
it('should change state onChange', () => {
  const title = wrapper.find('.editor-wrapper').find('#title');
  title.simulate('change', { target: { value: 'patrick' } });
  wrapper.find('#tags').simulate('change', { target: { value: 'andela' } });
  const ckEditor = wrapper.find('#bodyck')
});
    describe('submit button test...', () => {
      let instance
      let submitButton
      it('should test errors', () => {
        submitButton = wrapper.find('#article-button')
        wrapper.setProps({ article: { article: { errors: 'dwejkmbds' } } });
    
        submitButton.simulate('click')
      });

      it('should work on succesfull submission', () => {
        submitButton = wrapper.find('#article-button')
        wrapper.setProps({ article: { article: { } }, history: {} });
        submitButton.simulate('click')
      });
    
      it('should make a request to the server', () => {
        instance = wrapper.instance()
        submitButton = wrapper.find('#article-button')
        submitButton.simulate('click')
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
