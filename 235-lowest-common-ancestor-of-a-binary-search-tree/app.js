/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  
  let currentVal = root.val
  let currentNode = root;

  while(currentVal != p.val || currentVal != q.val) {
    if(currentVal > p.val && currentVal > q.val) {
      currentNode = currentNode.left;
    }
    else if (currentVal < p.val && currentVal < q.val) {
      currentNode = currentNode.right;
    }

    if(currentVal == currentNode.val) return currentNode;
    currentVal = currentNode.val;
  }

  return currentNode;
    
};
module.exports = lowestCommonAncestor;
