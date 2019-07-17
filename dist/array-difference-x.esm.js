function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import filter from 'array-filter-x';
import some from 'array-some-x';
import slice from 'array-like-slice-x';
import arrayincludes from 'array-includes-x';
import isNil from 'is-nil-x'; // eslint-disable jsdoc/check-param-names
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

var difference = function difference(array) {
  var _this = this;

  if (isNil(array)) {
    return [];
  }
  /* eslint-disable-next-line prefer-rest-params */


  var excludes = slice(arguments, 1);
  return filter(array, function (value) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    return some(excludes, function (exclude) {
      _newArrowCheck(this, _this2);

      return isNil(exclude) === false && arrayincludes(exclude, value);
    }.bind(this)) === false;
  }.bind(this));
};

export default difference;

//# sourceMappingURL=array-difference-x.esm.js.map