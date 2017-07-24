// @flow
import nest from 'array/nest';

describe('Traverse function', () => {
  const baseArray = [0, 0, 0, 0, 0, 0];

  it('Nests the array based on the return value of the condition function', () => {
    expect(nest(baseArray, (item, index) => !!(index % 2))).toEqual(([[0, 0], [0, 0], [0, 0]]));
  });
});
