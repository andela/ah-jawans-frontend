import highlightingTextAction from '../../../redux/actions/highlightingAction';
import * as types from '../../../redux/actionTypes/highlightingTypes';

describe('actions', () => {
    it('should allow users to highlight articles', () => {
        const payload = {
            text: 'text',
            elementId: 'elementId',
            comment: 'comment'
        };
        const expectedAction = {
            type: types.HIGHLIGHT_TEXT,
            payload,
        };
        expect(highlightingTextAction(payload)).toEqual(expectedAction);
    });
});
