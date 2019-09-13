import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from '../../../../config/enzymeConfig';

import Home, { Home as HomeComponent, mapStateToProps } from '../../../components/Header/Bookmarks/bookmarkedArticles';
import configureStore from '../../../redux/store/index';

const store = configureStore();
const state = {
    bookmark: { bookmarks: [] }
}

const props = {
    bookmark: { bookmarks: [] },
    postDataThunkPrivate: jest.fn(),
    articles: [
        {
            id: 11,
            articleId: 1,
            length: 1,
            article: {
                id: 11,
                title: 'This is title of the article',
                body: 'This is the body of the article',
                readtime: '2 mins',
                author: { username: 'shaluc' },
            }
        }
    ]
}

describe('<Home />', () => {
    it('Should render', () => {
        const wrapper = shallow(<Provider store={store}><Home /></Provider>);
        mapStateToProps(state)
        expect(wrapper).toHaveLength(1);
    });

    test('should renders without crashing ', () => {
        const component = shallow(<HomeComponent {...props} />);
        component.setProps(props);
        component.instance().handleDelete();

        const buttons = component.find('Button[buttonClass*="button"]');

        buttons.map(btn => {
            btn.simulate('click', {});
        });
    });
});
