import initialState from '../../redux/store/initialState';;

test('User initial state', () => {
  expect(initialState).toHaveProperty('user');
});
