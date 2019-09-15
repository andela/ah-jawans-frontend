import * as types from '../actions/actionTypes';
import initialState from '../store/initialStates/userInitialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REPORT_ARTICLES:
      return {
        ...state,
        reportData: action.payload,
        errors: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
