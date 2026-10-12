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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;

    let queue = [root];
    let pointer = 0;
    while(pointer < queue.length) {
      const node = queue[pointer];
      let tempRight = node.right;
      node.right = node.left;
      node.left = tempRight;

      if(node.right != null) {
        queue.push(node.right);
      }
      if(node.left != null) {
        queue.push(node.left);
      }

      pointer += 1;
    }

    return root
};
module.exports = invertTree;
