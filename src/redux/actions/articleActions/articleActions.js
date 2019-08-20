import * as types from '../../actionTypes/actionTypes';


const articleAction = (payload) => ({
  type: types.CREATE_ARTICLE_SUCCESS,
  payload,
});

const updateArticleAction = (payload) => ({
  type: types.UPDATE_ARTICLE_SUCCESS,
  payload,
});

export { articleAction, updateArticleAction };
