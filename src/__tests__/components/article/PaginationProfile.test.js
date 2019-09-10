import React from 'react';
import {
    Pagination, mapStateToProps
} from '../../../components/article/PaginationProfile';
import { shallow } from '../../../../config/enzymeConfig';

describe('<Pagination />', () => {
    const state = {
        buttons: ['button'],
        pageNumber: 1,
        getAllArticles: jest.fn(),
        postDataThunkPrivate: jest.fn(),
        getDataThunk: jest.fn(),
        displayButtons: jest.fn(),
        paginateArticles: jest.fn()
    };
    const component = shallow(<Pagination {...state} />)
    it('should create <Pagination /> snapshot ', () => {
        expect(component).toMatchSnapshot();
    });
    it('should check pagination of more than 12 articles ', () => {
        component.instance().displayButtons(49);
    });
    it('should paginate more than 12 articles ', () => {
        component.setProps({ limit: 1, offset: 12, label: 1, key: 1 });
        component
            .find('.pagination button')
            .at(0)
            .simulate('click');
        component.instance().displayButtons({ limit: 1, offset: 12, label: 1, key: 1 });
    });
    it('should pagination ', () => {
        component.instance().displayButtons(1);
    });
});
