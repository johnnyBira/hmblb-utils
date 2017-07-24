import prefill from 'array/prefill';

describe('Prefill function', () => {
  it('returns prefilled array of strings', () => {
    expect(prefill(2, 'mock')).toEqual(expect.arrayContaining(['mock', 'mock']));
  });

  it('returns prefilled array of numbers', () => {
    expect(prefill(2, 1)).toEqual(expect.arrayContaining([1, 1]));
  });

  it('returns prefilled array of specified length', () => {
    expect(prefill(2, 1).length).toBe(2);
  });
});
