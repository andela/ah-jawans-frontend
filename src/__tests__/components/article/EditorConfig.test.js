
import imageUploader from '../../../helpers/imageUploader';
import editorConfigs from  '../../../helpers/ckeditorConfig';

describe('Testing Image Upload', () => {
    test('should reject a promise',() => {
        expect(imageUploader('file')).rejects
    });

    test('should return a promise',() => {
        expect(imageUploader('file')).toBeDefined()
    });
    test('should have a key',() => {
        expect(editorConfigs).toHaveProperty('toolbar')
    });
});
