import * as types from '../actions/actionTypes';
import initialState from '../store/initialStates/userInitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_ARTICLES:
      return {
        ...state,
        searchData: action.payload,
        errors: action.payload.errors,
      };
    default:
      return {
        ...state,
      };
  }
};
