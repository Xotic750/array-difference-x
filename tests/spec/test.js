'use strict';

var difference;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  difference = require('../../index.js');
} else {
  difference = returnExports;
}

var LARGE_ARRAY_SIZE = 200;

describe('difference', function () {
  it('is a function', function () {
    expect(typeof difference).toBe('function');
  });

  it('should return the difference of the given arrays', function () {
    var actual = difference([
      1,
      2,
      3,
      4,
      5
    ], [
      5,
      2,
      10
    ]);

    expect(actual).toEqual([
      1,
      3,
      4
    ]);

    actual = difference([
      1,
      2,
      3,
      4,
      5
    ], [
      5,
      2,
      10
    ], [8, 4]);

    expect(actual).toEqual([1, 3]);
  });

  it('should match `NaN`', function () {
    expect(difference([
      1,
      NaN,
      3
    ], [
      NaN,
      5,
      NaN
    ])).toEqual([1, 3]);
  });

  it('should work with large arrays', function () {
    var array1 = new Array(LARGE_ARRAY_SIZE + 1).fill().map(Number.call, Number);
    var array2 = new Array(LARGE_ARRAY_SIZE).fill().map(Number.call, Number);
    var a = {};
    var b = {};
    var c = {};

    array1.push(a, b, c);
    array2.push(b, c, a);

    expect(difference(array1, array2)).toEqual([LARGE_ARRAY_SIZE]);
  });

  it('should work with large arrays of objects', function () {
    var object1 = {};
    var object2 = {};
    var largeArray = new Array(LARGE_ARRAY_SIZE).fill(object1);

    expect(difference([object1, object2], largeArray)).toEqual([object2]);
  });

  it('should work with large arrays of `NaN`', function () {
    var largeArray = new Array(LARGE_ARRAY_SIZE).fill(NaN);
    expect(difference([
      1,
      NaN,
      3
    ], largeArray)).toEqual([1, 3]);
  });

  it('should ignore values that are not arrays or `arguments` objects', function () {
    var args = (function () {
      return arguments;
    }(1, 2, 3));

    var array = [
      0,
      1,
      null,
      3
    ];

    expect(difference(array, 3, null, { 0: 1 })).toEqual(array);
    expect(difference(array, null, [2, 1])).toEqual([
      0,
      null,
      3
    ]);

    expect(difference(array, null, args)).toEqual([0, null]);
    expect(difference(null, array, 1)).toEqual([]);
  });
});
