function someOfOther(arr) {
  if (arr && arr.length) {
    const sum = arr.reduce((start, end) => start + end);
    return arr.map(el => sum - el);
  }
  throw new Error('Error: array is not invalid');
}

module.exports = {
  someOfOther,
};
