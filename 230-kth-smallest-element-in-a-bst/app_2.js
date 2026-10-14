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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0;
  const stack = [];
  let currentNode = root;

  while(currentNode != null || stack.length > 0) {
    while(currentNode != null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    count += 1;

    if(count == k) return currentNode.val;

    currentNode = currentNode.right;
  }

  return currentNode.val;
    
};
module.exports = kthSmallest;
