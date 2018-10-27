var assert = require('assert');
Object.freeze(assert);
const makeModule = require('../src/make.js');


describe('Sum of values until sum as function is passed', function () {
  it('sum when multiple arguments', function () {
    assert.equal(makeModule.make(3, 4)(500, 500)(makeModule.sum), 1007);
  });
  it('sum when single argument is passed', function () {
    assert.equal(makeModule.make(3)(500)(makeModule.sum), 503);
  });
  it('sum when only one call', function () {
    assert.equal(makeModule.make(3)(makeModule.sum), 3);
  });
  it('sum when many calls', function () {
    assert.equal(makeModule.make(3, 100)(500)(1, 10, 7, 8, 9)(106, 107, 5)(makeModule.sum), 856);
  });
  it('sum when no arguments somewhere', function () {
    assert.equal(makeModule.make(4,8)()(100,6,7)(makeModule.sum), 125);
  });
});