import userInitialState from '../../redux/store/initialStates/userInitialState';

test('User initial state', () => {
  expect(userInitialState).toHaveProperty('isAuth');
});
