/* Recursion function with 3 arguments: node (at first root node is used),
 result array and level where each element contains values of tree at corresponding level
  */
function mapTree(node, arrToFill, level) {
  if (arrToFill[level]) {
    arrToFill[level].push(node.value);
  } else {
    arrToFill.push([node.value]);
  }

  const nextLevel = level + 1;

  if (node.left) {
    mapTree(node.left, arrToFill, nextLevel);
  }
  if (node.right) {
    mapTree(node.right, arrToFill, nextLevel);
  }
  return arrToFill;
}

// wripper for conver tree into array function needed to specify initial valudes for real recursion
function recursion(node) {
  if (!node) {
    throw new Error('Node cannot be undefined');
  }
  return mapTree(node, [], 0);
}

module.exports = {
  recursion,
};
