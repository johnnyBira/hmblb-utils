// @flow

/**
 * Returns a prefilled array of default values
 * @constructor
 * @param {number} length - Number of array items.
 * @param {any} value - Default value to prefill.
 * @returns {array} - Returns a new array with prefilled values.
 */
const prefill = (length: number, value: string | number) => (
  Array(length).fill(value)
);

export default prefill;
