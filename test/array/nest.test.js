// @flow
import nest from 'array/nest';

describe('Traverse function', () => {
  const baseArray = [0, 0, 0, 0, 0, 0];

  it('Creates a new nested array for every even array item index', () => {
    expect(nest(baseArray, (item, index) => !!(index % 2))).toEqual(([[0, 0], [0, 0], [0, 0]]));
  });
});
