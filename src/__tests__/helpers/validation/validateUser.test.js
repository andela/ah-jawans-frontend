import { validateUser } from '../../../helpers/validation';
import { userToRegister, invalidUser } from '../../../__mocks__/user';

test('Validate user with correct inputs', () => {
    const errors = validateUser(userToRegister, 'updateUser');
    expect(Object.keys(errors).length).toBe(0);
});

test('Validate user with incorrect inputs', () => {
    const errors = validateUser(invalidUser, 'updateUser');
    expect(Object.keys(errors).length).toBe(2);
});
