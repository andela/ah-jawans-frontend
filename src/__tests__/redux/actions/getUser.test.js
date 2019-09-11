import { getUserAction, getAUthorArticlesAction, deleteArticleAction } from '../../../redux/actions/user/getUser';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should getUserAction', () => {
        const payload = {
            username: 'shaluV',
        };
        const expectedAction = {
            type: userActionsTypes.GET_USER_SUCCESS,
            payload,
        };
        expect(getUserAction(payload)).toEqual(expectedAction);
    });

    it('should get articles', () => {
        const payload = {
            id: '3',
        };
        const expected= {
            type: userActionsTypes.GET_AUTHOR_ARTICLES,
            payload,
        };
        expect(getAUthorArticlesAction(payload)).toEqual(expected);
    });
    it('should delete an articles', () => {
        const payload = {
            id: '3',
        };
        const expected= {
            type: userActionsTypes.DELETE_ARTICLE,
            payload,
        };
        expect(deleteArticleAction(payload)).toEqual(expected);
    });
});
