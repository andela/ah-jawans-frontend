import { createCommentAction, updateCommentAction, deleteCommentAction, getAllCommentsAction } from '../../../redux/actions/commentsActions/commentsActions';
import * as types from '../../../redux/actionTypes/actionTypes';

describe('actions', () => {
  it('should create an action to add a comment', () => {
    const payload = {
      body: 'great work',
    };
    const expectedAction = {
      type: types.CREATE_COMMENTS_SUCCESS,
      payload,
    };
    expect(createCommentAction(payload)).toEqual(expectedAction);
  });
    it('should create an action to get a comment', () => {
      const payload = {
        articles :{ 
           id: '12'
        },
      body: 'great work',
    };
    const expectedAction = {
      type: types.UPDATE_COMMENTS_SUCCESS,
      payload,
    };
    expect(updateCommentAction(payload)).toEqual(expectedAction);
    });
  it('should create an action to delete a comment', () => {
      const payload = {
        articles :{ 
           id: '12'
        },
      body: 'great work',
    };
    const expectedAction = {
      type: types.DELETE_COMMENTS_SUCCESS,
      payload,
    };
    expect(deleteCommentAction(payload)).toEqual(expectedAction);
  });
    it('should create an action to delete a comment', () => {
      const payload = {
        articles :{ 
           id: '12'
        },
      body: 'great work',
    };
    const expectedAction = {
      type: types.GET_ALL_COMMENTS_SUCCESS,
      payload,
    };
    expect(getAllCommentsAction(payload)).toEqual(expectedAction);
  });
});
