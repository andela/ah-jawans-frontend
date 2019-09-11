import articleReducer from '../../../redux/reducers/articleReducer/articleReducer';
import { UPDATE_ARTICLE_SUCCESS, CREATE_ARTICLE_SUCCESS } from '../../../redux/actionTypes/actionTypes';

  const articles =  {
    "title": "this is the title",
    "body": "this is the body of teh article",
    "tags":'sports, tech',
    "author": {
        "username": "patrickngabo",
    }
  }

  const initialState = {
  article: {},
  token: localStorage.token || null,
  error: null,
};

describe('Reducers', () => {
  test('UPDATE ARTICLE', () => {
    const expectedState = {
      ...initialState,
      article: {
         title: 'Ese ni muebue',
        body: 'ese nimbwe',
        tags:'js,react'
       }
    };

    const state = articleReducer(initialState, {
      type: UPDATE_ARTICLE_SUCCESS,
      payload: {
        title: 'Ese ni muebue',
        body: 'ese nimbwe',
        tags:'js,react'
      
      }
    });
    expect(state).toEqual(expectedState);
  })
  test('CREATE ARTICLE', () => {
    const expectedState = {
      ...initialState,
      article: {
         title: 'Ese ni muebue',
        body: 'ese nimbwe',
        tags:'js,react'
       }
    };

    const state = articleReducer(initialState, {
      type: CREATE_ARTICLE_SUCCESS,
      payload: {
        title: 'Ese ni muebue',
        body: 'ese nimbwe',
        tags:'js,react'
      
      }
    });
    expect(state).toEqual(expectedState);
  })
});
