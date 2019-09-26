const getProducts = require('./helpers');

describe('Test the DB query', () => {
  test('It should resolve with 6 products', () => {
    return getProducts().then(rows => {
      expect(rows.length).toEqual(6);
    });
  });
});