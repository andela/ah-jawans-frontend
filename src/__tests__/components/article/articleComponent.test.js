import React from 'react';
import { shallow, mount } from '../../../../config/enzymeConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreateArticle from '../../../components/article/ArticleComponent';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  article: { article: {} },
  userCredentials: { userCredentials: {} },
});

const props = {
  article: jest.fn(),
};

// mock for mutations observer window object
global.MutationObserver = class {
  disconnect() {}
  observe() {}
};

describe('<CreateArticle />', () => {
  beforeEach(() => { });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const component = shallow(
    <Provider store={store}>
      <CreateArticle {...props} />
    </Provider>,
  );

  it('should render without crashing', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render the component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <CreateArticle />
        </Router>
      </Provider>,
    );
    expect(wrapper.find('Editor')).toBeDefined();
  });
});
