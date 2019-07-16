let difference;

describe('difference', function() {
  let LARGE_ARRAY_SIZE;

  beforeEach(function() {
    LARGE_ARRAY_SIZE = 200;
  });

  it('is a function', function() {
    expect.assertions(1);
    expect(typeof difference).toBe('function');
  });

  it('should return the difference of the given arrays', function() {
    expect.assertions(1);
    let actual = difference([1, 2, 3, 4, 5], [5, 2, 10]);

    expect(actual).toStrictEqual([1, 3, 4]);

    actual = difference([1, 2, 3, 4, 5], [5, 2, 10], [8, 4]);

    expect(actual).toStrictEqual([1, 3]);
  });

  it('should match `NaN`', function() {
    expect.assertions(1);
    expect(difference([1, NaN, 3], [NaN, 5, NaN])).toStrictEqual([1, 3]);
  });

  it('should work with large arrays', function() {
    expect.assertions(1);
    const array1 = new Array(LARGE_ARRAY_SIZE + 1).fill().map(Number.call, Number);
    const array2 = new Array(LARGE_ARRAY_SIZE).fill().map(Number.call, Number);
    const a = {};
    const b = {};
    const c = {};

    array1.push(a, b, c);
    array2.push(b, c, a);

    expect(difference(array1, array2)).toStrictEqual([LARGE_ARRAY_SIZE]);
  });

  it('should work with large arrays of objects', function() {
    expect.assertions(1);
    const object1 = {};
    const object2 = {};
    const largeArray = new Array(LARGE_ARRAY_SIZE).fill(object1);

    expect(difference([object1, object2], largeArray)).toStrictEqual([object2]);
  });

  it('should work with large arrays of `NaN`', function() {
    expect.assertions(1);
    const largeArray = new Array(LARGE_ARRAY_SIZE).fill(NaN);
    expect(difference([1, NaN, 3], largeArray)).toStrictEqual([1, 3]);
  });

  it('should ignore values that are not arrays or `arguments` objects', function() {
    expect.assertions(1);
    const args = (function() {
      return arguments;
    })(1, 2, 3);

    const array = [0, 1, null, 3];

    expect(difference(array, 3, null, {0: 1})).toStrictEqual(array);
    expect(difference(array, null, [2, 1])).toStrictEqual([0, null, 3]);

    expect(difference(array, null, args)).toStrictEqual([0, null]);
    expect(difference(null, array, 1)).toStrictEqual([]);
  });
});
