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
var countUp = function(node, count, k) {
  if(count == k) return [node, count];
  count +=1;
  if(node.left) countUp(node.left, count, k);
  if(node.right) countUp(node.right, count, k);
  return [undefined, count];
}

var kthSmallest = function(root, k) {
  const stack = [];
  let lowestCount = 0;

  // find lowest node first
  let lowestNode = root
  while(!!lowestNode) {
    stack.push(lowestNode);
    lowestNode = lowestNode.left;
  }

  let currentNode = null;
  while(lowestCount < k) {
    const stackedNode = stack.pop();
    currentNode = stackedNode;
    lowestCount+=1;

    if(lowestCount == k) return currentNode.val;

    if(currentNode.right) {
      const [node, innerloopCount] = countUp(currentNode.right, lowestCount, k);
      if(node) currentNode = node;
      lowestCount = innerloopCount;
    }
  }

  return currentNode.val;
    
};
module.exports = kthSmallest;
