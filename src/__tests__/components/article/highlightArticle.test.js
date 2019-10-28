import React from 'react';
import { shallow } from '../../../../config/enzymeConfig';
import '../../../__mocks__/window';
import { HighlightArticle } from '../../../components/article/HighlightArticle/HighlightArticle';

const defaultProps = {
  articleId: 'articleId',
  postHighlight: jest.fn()
};

describe('HighlightArticle', () => {
  const renderHighlightArticle = (args) => {
    const final = { ...defaultProps, ...args };
    return shallow(<HighlightArticle {...final} />);
  };

  it('should render highlightArticle', () => {
    const wrapper = shallow(<HighlightArticle {...defaultProps} />);
    const buttons = wrapper.find('button');
    const textarea = wrapper.find('textarea');
  
    wrapper.instance().checkHighlightedText();
    wrapper.setState({ isModalShown: false, selectionRectangle: {} });
    console.log('wrapper.debug() :', wrapper.debug());;
    const form = wrapper.find('#comment-highlight-form');
    
    buttons.map(button => button.simulate('click', {}));

    textarea.simulate('change', { target: { name: 'comment', value: 'comment' } });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(wrapper.state().comment).toEqual('comment');
    expect(wrapper.find('#highlightCommentModal').length).toBe(1);
  });
  it('should render highlightArticle', () => {
    const wrapper = renderHighlightArticle();
    const buttons = wrapper.find('button');
    buttons.map(button => button.simulate('click', {}));
    wrapper.setState({ selectionRectangle: {}, isModalShown: true });
    wrapper.instance().checkHighlightedText();
    wrapper.instance().openCommentModal();
    expect(wrapper.find('#highlightCommentModal').length).toBe(1);
  });
});
