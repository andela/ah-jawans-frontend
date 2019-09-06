import * as types from '../../actionTypes/actionTypes';


const articleAction = (payload) => (dispatch) => {
  dispatch({
    type: types.CREATE_ARTICLE_SUCCESS,
    payload,
  });
};

const updateArticleAction = (payload) => (dispatch) => {
  dispatch({
    type: types.UPDATE_ARTICLE_SUCCESS,
    payload,
  });
};

export { articleAction, updateArticleAction };
