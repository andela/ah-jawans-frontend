import commentHistoryReducer from '../../../redux/reducers/commentReducer/commentHistory';
import { GET_COMMENTS_HISTORY } from '../../../redux/actionTypes/actionTypes';
import user from '../../../__mocks__/user';

const initialState = {
    commentHistory: [],
  };

describe('User reducers', () => {
  test('GET_USER_SUCCESS', () => {
    const reducer = commentHistoryReducer(initialState, {
  type: GET_COMMENTS_HISTORY,
  payload: {user},
    });
  });
});
