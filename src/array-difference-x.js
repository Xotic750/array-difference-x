/**
 * @file Creates an array of array values not included in the other given arrays.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-difference-x
 */

const filter = require('array-filter-x');
const some = require('array-some-x');
const slice = require('array-like-slice-x');
const arrayincludes = require('array-includes-x');
const isNil = require('is-nil-x');

/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {...Array} [exclude] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * var difference = require('array-difference-x');
 *
 * difference([2, 1], [2, 3]); // => [1]
 */
module.exports = function difference(array) {
  if (isNil(array)) {
    return [];
  }

  const excludes = slice(arguments, 1);

  return filter(array, function(value) {
    return (
      some(excludes, function(exclude) {
        return isNil(exclude) === false && arrayincludes(exclude, value);
      }) === false
    );
  });
};
