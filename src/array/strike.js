// @flow

/**
 * Replaces the items in the baseArray with the items of the strikeArray
 * @constructor
 * @param {array} baseArray - Array of default values.
 * @param {array} strikeArray - Array of values to .
 * @param {index} [index] - Determains at what index the wander should be inserted
 * into the baseArray array.
 * @param {offset} [offset] - Offsets the index parameter
 * @returns {array} - Returns a new array
 */

const strike = (
  baseArray: [string | number],
  strikeArray: [string | number],
  index?: number = 0,
  offset?: number = 0,
) => {
  // Account for offset
  let insertAt = index + offset;

  // Keep index within array bounds
  // insertAt = repeat(0, baseArray.length - 1);
  insertAt = insertAt > baseArray.length - 1 ? insertAt - baseArray.length : insertAt;
  insertAt = insertAt < 0 ? (baseArray.length) + insertAt : insertAt;

  // Avoid mutating the input baseArray array
  const baseArrayRef = baseArray.concat();
  const remaining = (baseArray.length - 1) - insertAt;
  let overflow = (strikeArray.length - 1) - remaining;
  overflow = overflow < 0 ? 0 : overflow;
  const strikeArrayFollower = strikeArray.slice(0, strikeArray.length - overflow);
  const strikeArrayLeader = strikeArray.slice(
    strikeArray.length - overflow, strikeArray.length,
  );

  baseArrayRef.splice(insertAt, strikeArrayFollower.length, ...strikeArrayFollower);
  baseArrayRef.splice(0, strikeArrayLeader.length, ...strikeArrayLeader);
  return baseArrayRef;
};

export default strike;
