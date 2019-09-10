import React from 'react';
import { mount } from '../../../../config/enzymeConfig';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import { Home } from '../../../components/Home';
import { mockStore } from '../../../__mocks__/store';


const props = {
  getDataThunk: jest.fn(),
  userCredentials: { userCredentials: {} },
  notification: [{ id: 111, message: '', status: 'false' }],
  articles: [{
    "title": "this is the title",
    "body": "this is the body of teh article",
    "author": {
      "username": "Joe",
    },
    length: 1,
  }],
}


describe('<Home />', () => {
  test('renders without crashing', () => {
    const component = mount(<Provider store={mockStore({
      getDataThunk: jest.fn(),
      userCredentials: { userCredentials: {} },
      notification: [{ id: 111, message: '', status: 'false' }],
      articles: [{
        "title": "this is the title",
        "body": "this is the body of teh article",
        "author": {
          "username": "Joe",
        },
        length: 1,
      }],
    })}>
      <MemoryRouter>
        <Home {...props} />
      </MemoryRouter>
    </Provider >);
    expect(component).toHaveLength(1);
  });
});
