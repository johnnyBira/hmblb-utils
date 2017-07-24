// @flow

const inBound = (num: number, max: number, min: number = 0) => {
  if (num > max) {
    return max;
  }
  if (num < min) {
    return min;
  }
};

export default inBound;
