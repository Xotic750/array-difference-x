/**
 * @file Creates an array of array values not included in the other given arrays.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-difference-x
 */

import filter from 'array-filter-x';

import some from 'array-some-x';
import slice from 'array-like-slice-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

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
export default function difference(array) {
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
}
