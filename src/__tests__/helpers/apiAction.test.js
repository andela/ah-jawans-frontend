import { apiAction } from '../../helpers';

test('API action helper', () => {
  let result = apiAction({ url: '/profile', method: 'GET' });

  expect(result).toHaveProperty('type');
  expect(result).toHaveProperty('payload');
  expect(result.payload).toHaveProperty('url');
  expect(result.payload.url).toEqual('/profile');
  expect(result.payload).toHaveProperty('method');
  expect(result.payload.method).toEqual('GET');

  result = apiAction({});

  expect(result.payload.url).not.toEqual('/profile');
  expect(result.payload.data).toEqual(null);
});
