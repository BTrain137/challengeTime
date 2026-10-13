/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // Each entry carries the open range (min, max) its node must fall strictly inside.
  // ±Infinity means "no bound", so no null checks are needed.
  let nodeRow = [[root, -Infinity, Infinity]];

  while (nodeRow.length > 0) {
    const tempRow = [];
    for (const [node, min, max] of nodeRow) {
      // Strict: the definition says keys are strictly less / greater, so equal fails.
      if (node.val <= min || node.val >= max) return false;

      // Left child: max tightens to this node's value, min is inherited.
      if (node.left) tempRow.push([node.left, min, node.val]);
      // Right child: min tightens to this node's value, max is inherited.
      if (node.right) tempRow.push([node.right, node.val, max]);
    }
    nodeRow = tempRow;
  }

  return true;
};
module.exports = isValidBST;
