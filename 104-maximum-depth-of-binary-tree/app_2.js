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

  let queue = [root];
  let level = 0;
  
  while(queue.length > 0) {
    const len = queue.length;
    for(let i = 0; i < len; i += 1) {
      const node = queue[0];
      if(node.right) {
        queue.push(node.right);
      }
      if(node.left) {
        queue.push(node.left);
      }
      queue.shift();
    }
    level += 1;
  }

  return level
};

module.exports = maxDepth;
