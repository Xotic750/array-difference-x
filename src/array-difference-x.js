import filter from 'array-filter-x';
import some from 'array-some-x';
import slice from 'array-like-slice-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x';

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * This method creates an array of array values not included in the other given
 * arrays using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 *
 * @param {Array} array - The array to inspect.
 * @throws {TypeError} If array is null or undefined.
 * @param {...Array} [exclude] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
// eslint-enable jsdoc/check-param-names
const difference = function difference(array) {
  if (isNil(array)) {
    return [];
  }

  /* eslint-disable-next-line prefer-rest-params */
  const excludes = slice(arguments, 1);

  return filter(array, (value) => {
    return (
      some(excludes, (exclude) => {
        return isNil(exclude) === false && arrayincludes(exclude, value);
      }) === false
    );
  });
};

export default difference;
