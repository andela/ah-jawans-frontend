import { articleAction, updateArticleAction } from '../../../redux/actions/articleActions/articleActions';
import * as types from '../../../redux/actionTypes/actionTypes';


describe('actions', () => {
    it('should CREATE_ARTICLE_SUCCESS', () => {
      const payload = {
        articles: [{
          "title": "this is the title",
        "body": "this is the body of teh article",
          "tags": "javascript, reactjs",
          "author": {
            "username": "Joe",
          }
        }]
      };
        const expectedAction = {
          type: types.CREATE_ARTICLE_SUCCESS,
          payload,
        };
      expect(articleAction(payload));
    });
      it('should UPDATE_ARTICLE_SUCCESS', () => {
        const payload = {
          articles: [{
          "title": "this is the title",
          "body": "this is the body of teh article",
          "tags": "javascript, reactjs",
          "author": {
              "username": "Joe",
          }
        }]
        };
        const expectedAction = {
          type: types.UPDATE_ARTICLE_SUCCESS,
          payload,
        };
        expect(updateArticleAction(payload));
    });
});
