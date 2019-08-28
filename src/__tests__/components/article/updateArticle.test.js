import React from 'react';
import { shallow, mount } from '../../../../config/enzymeConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UpdateArticle, { UpdateArticle as View } from '../../../components/article/updateArticle';

jest.mock('../../../components/Layout/Layout', () => () => (
  <div id="mockFileLayout">mockFileLayout</div>
));
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  article: { article: {} },
  userCredentials: { userCredentials: {} }, 
});

const props = {
  article: jest.fn(),
  postDataThunkprivate: jest.fn(),
  errors: {}
};

global.MutationObserver = class {
  disconnect() {}
  observe() {}
};

describe('<UpdateArticle />', () => {
  beforeEach(() => { });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const component = shallow(
    <Provider store={store}>
      <UpdateArticle {...props} />
    </Provider>,
  );

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });
 
  it('Should render the component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <UpdateArticle />
        </Router>
      </Provider>,
    );
    expect(wrapper.find('UpdateArticle')).toBeDefined();
  });
test('should test create article', () => {
      const props = {
        title: 'Onboarding onto a large codebase',
        body:'Onboarding onto a large codebase',
        tags:'javascipt, react'
      };
      let instance
        let submitButton
        beforeAll(() => {
            instance = wrapper.instance()
            submitButton = wrapper.find('button[type="submit"]')
          submitButton.simulate('click')
          it('should make a request to the server', () => {
            expect(submitButton).toHaveLength(1)
            wrapper.update()
            const event = {
                preventDefault: jest.fn(),
            }
            wrapper.setProps({
                history: {push: jest.fn()}
            })
            instance.handleSubmit(event)
        })
        })
  });
});
