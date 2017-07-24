// @flow

/**
 * Nest array one level based on boolean retunred by the coditional function
 * @constructor
 * @param {array} array - original array
 * @param {function} condition
 * @returns {array} - Returns a new array of nested array(s)
 */
const nest = (array: any[], condition: (any, index: number) => boolean): Array<[]> => {
  const newArray = [];
  let currentArray = [];
  let arrayIndex = 0;

  array.forEach((item, index) => {
    if (condition(item, index)) {
      arrayIndex += 1;
      newArray[arrayIndex] = [];
      // Creata new array at arrayIndex if undefined
      currentArray = newArray[arrayIndex] ? newArray[arrayIndex] : newArray[arrayIndex] = [];
    }
    currentArray.push(item);
  });

  return newArray;
};

export default nest;
