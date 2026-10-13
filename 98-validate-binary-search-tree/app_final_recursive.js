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
  // valid(node, min, max): is every node in this subtree strictly inside (min, max)?
  const valid = (node, min, max) => {
    if (!node) return true; // an empty subtree is always valid
    if (node.val <= min || node.val >= max) return false;
    // && short-circuits: a false on the left returns immediately, the right is never visited.
    return valid(node.left, min, node.val) && valid(node.right, node.val, max);
  };

  return valid(root, -Infinity, Infinity);
};
module.exports = isValidBST;
