// @flow
import traverse from 'array/strike';

describe('Traverse function', () => {
  const baseArray = [0, 0, 0, 0, 0];
  const traverseArray = [1, 2, 3];

  it('replaces the items of a base array with a traversed array', () => {
    expect(traverse(baseArray, traverseArray)).toEqual(expect.arrayContaining([1, 2, 3, 0, 0]));
  });

  it('inserts the traverse array at index 2 of of the base array', () => {
    expect(traverse(baseArray, traverseArray, 2)).toEqual(([0, 0, 1, 2, 3]));
  });

  it('offsets the position of the traversed array', () => {
    expect(traverse(baseArray, traverseArray, 2, -1)).toEqual(([0, 1, 2, 3, 0]));
  });

  it('overflows to the beginning of the base array if traverse array lenght is out of bounds', () => {
    expect(traverse(baseArray, traverseArray, 4)).toEqual(([2, 3, 0, 0, 1]));
  });

  it('accounts for an overflowing index', () => {
    expect(traverse(baseArray, traverseArray, 5)).toEqual(([1, 2, 3, 0, 0]));
  });

  it('accounts for a negative index', () => {
    expect(traverse(baseArray, traverseArray, -1)).toEqual(([2, 3, 0, 0, 1]));
  });

  it('dosen\'t mutate the orignal baseArray', () => {
    expect(baseArray).toEqual([0, 0, 0, 0, 0]);
  });

  it('dosen\'t mutate the orignal traverseArray', () => {
    expect(traverseArray).toEqual([1, 2, 3]);
  });
});
