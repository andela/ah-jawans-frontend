import { commentReducer } from '../../../redux/reducers/commentReducer/commentReducer';
import { CREATE_COMMENTS_SUCCESS, UPDATE_COMMENTS_SUCCESS, DELETE_COMMENTS_SUCCESS, GET_ALL_COMMENTS_SUCCESS } from '../../../redux/actionTypes/actionTypes';

  const initialState = {
  comments: {},
  token: localStorage.token || null,
  errors: null,
};

describe('Reducers', () => {
  test('create comment', () => {
    const expectedState = {
      ...initialState,
      comments: {
        articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
       }
    };

    const state = commentReducer(initialState, {
      type: CREATE_COMMENTS_SUCCESS,
      payload: {
         articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
      
      }
    });
    expect(state).toEqual(expectedState);
  })
    test('update comment', () => {
      const expectedState = {
        ...initialState,
        comments: {
          articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
       }
    };

    const state = commentReducer(initialState, {
      type: UPDATE_COMMENTS_SUCCESS,
      payload: {
         articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
      }
    });
    expect(state).toEqual(expectedState);
    })
      test('delete comment', () => {
      const expectedState = {
        ...initialState,
        comments: {
          articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
       }
    };

    const state = commentReducer(initialState, {
      type: DELETE_COMMENTS_SUCCESS,
      payload: {
         articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
      }
    });
    expect(state).toEqual(expectedState);
      })
        test('Get all comments', () => {
      const expectedState = {
        ...initialState,
        comments: {
          articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
       }
    };

    const state = commentReducer(initialState, {
      type: GET_ALL_COMMENTS_SUCCESS,
      payload: {
         articles: { 
            id:'12'
          },
        body: 'ese nimbwe',
      }
    });
    expect(state).toEqual(expectedState);
  })
});
