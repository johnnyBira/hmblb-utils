import index from 'index';

test('Should export utility functions', () => {
  expect(JSON.stringify(index)).toEqual(JSON.stringify({
    array: {},
  }));
});
