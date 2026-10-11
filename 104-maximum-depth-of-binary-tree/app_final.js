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
 * @return {number}
 */
var maxDepth = function(root) {
  // An empty subtree adds no nodes to the path. `!root` covers null and undefined.
  if (!root) return 0;

  // A node's depth is itself plus the deeper of its two subtrees.
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

module.exports = maxDepth;
