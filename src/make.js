function make(...params) {
  const arr = [];

  function f(...args) {
    if (typeof args[0] === 'function') {
      return arr.reduce((a, b) => a + b);
    }
    arr.push(...args);
    return f;
  }

  return f(...params);
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  make,
  sum,
};
