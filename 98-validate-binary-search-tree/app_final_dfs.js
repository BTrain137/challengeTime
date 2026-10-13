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
  // Same (node, min, max) entries as BFS, but a stack: pop() goes deep before wide.
  // The stack holds roughly one root-to-leaf path plus siblings, so O(h) space.
  const stack = [[root, -Infinity, Infinity]];

  while (stack.length > 0) {
    const [node, min, max] = stack.pop();
    if (node.val <= min || node.val >= max) return false;

    if (node.right) stack.push([node.right, node.val, max]);
    if (node.left) stack.push([node.left, min, node.val]);
  }

  return true;
};
module.exports = isValidBST;
