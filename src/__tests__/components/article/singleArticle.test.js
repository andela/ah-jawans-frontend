import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import SingleArticle from '../../../components/article/singleArticle';

const props = {
    image : 'url',
    title : 'title',
    author : 'Author',
    readTime : '2min',
    page : 'string',
    onClick : jest.fn(),
}

describe('<singleArticle />', () => {
  it('Should render', () => {
    const wrapper = shallow(<SingleArticle {...props}/>);
    expect(wrapper.contains(<div className='card mb-4 shadow-sm'></div>));
  });
});
