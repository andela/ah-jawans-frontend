import { GET_ARTICLES } from './actionTypes';

const getArticlesAction = (payload) => ({
  type: GET_ARTICLES,
  payload,
});

export default getArticlesAction;
