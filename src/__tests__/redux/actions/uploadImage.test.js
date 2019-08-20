import uploadUserProfile from '../../../redux/actions/user/uploadImage';
import { userActionsTypes } from '../../../redux/actionTypes';

describe('actions', () => {
    it('should upload login user image', () => {
        const payload = {
            image: 'image.jpg',
        };
        const expectedAction = {
            type: userActionsTypes.UPLOAD_PROFILE_PICTURE_SUCCESS,
            payload,
        };
        expect(uploadUserProfile(payload)).toEqual(expectedAction);
    });
});