var assert = require('assert');
Object.freeze(assert);
const makeModuleForMakeFunction = require('../src/make.js');
const makeModuleForSumFunction = require('../src/someOfOther.js');


describe('Sum of values until sum as function is passed', function () {
  it('sum when multiple arguments', function () {
    assert.equal(makeModuleForMakeFunction.make(3, 4)(500, 500)(makeModuleForMakeFunction.sum), 1007);
  });
  it('sum when single argument is passed', function () {
    assert.equal(makeModuleForMakeFunction.make(3)(500)(makeModuleForMakeFunction.sum), 503);
  });
  it('sum when only one call', function () {
    assert.equal(makeModuleForMakeFunction.make(3)(makeModuleForMakeFunction.sum), 3);
  });
  it('sum when many calls', function () {
    assert.equal(makeModuleForMakeFunction.make(3, 100)(500)(1, 10, 7, 8, 9)(106, 107, 5)(makeModuleForMakeFunction.sum), 856);
  });
  it('sum when no arguments somewhere', function () {
    assert.equal(makeModuleForMakeFunction.make(4, 8)()(100, 6, 7)(makeModuleForMakeFunction.sum), 125);
  });
});

describe('Sum of other elements of array', function () {
  it('happy path with few elements in array', function () {
    let initialArr = [2, 3, 4, 1];
    let finalArr = [8, 7, 6, 9];
    assert.deepEqual(makeModuleForSumFunction.someOfOther(initialArr), finalArr);
  });
  it('only 2 elements in array', function () {
    let initialArr = [2, 3];
    let finalArr = [3, 2];
    assert.deepEqual(makeModuleForSumFunction.someOfOther(initialArr), finalArr);
  });
  it('many elements in array', function () {
    let initialArr = [77, 3, 1, 455, 77, 9, 1, 1, 77, 4, 66, 77, 3, 4, 6, 9, 3, 7, 3, 676];
    let finalArr = [1482, 1556, 1558, 1104, 1482, 1550, 1558, 1558, 1482, 1555, 1493, 1482, 1556, 1555, 1553, 1550, 1556, 1552, 1556, 883];
    assert.deepEqual(makeModuleForSumFunction.someOfOther(initialArr), finalArr);
  });
  it('throws error if array is not valid', function () {
    assert.throws(() => {
      smakeModuleForSumFunction.someOfOther();  // usage of wanted function with test parameters
    }, Error)
  });
});