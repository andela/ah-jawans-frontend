import * as types from '../actionTypes/highlightingTypes';

export default (payload) => ({
  type: types.HIGHLIGHT_TEXT,
  payload,
});
