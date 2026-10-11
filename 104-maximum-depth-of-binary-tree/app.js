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
  if(root == null || root == undefined) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  const depth = 1 + Math.max(right, left);

  return depth;
  
};

module.exports = maxDepth;
