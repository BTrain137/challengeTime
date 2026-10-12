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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return [];

  const nodeResults = [[root]];
  const results = [[root.val]]
  let level = 0
  let length = nodeResults[level].length;
  while(length > 0) {
    const subArr = [];
    const subResults = [];
    const row = nodeResults[level];


    for(let i = 0; i < row.length; i += 1) {
      const node = row[i];
      if(node.left) subArr.push(node.left), subResults.push(node.left.val);
      if(node.right) subArr.push(node.right), subResults.push(node.right.val);
    }
    
    if(subArr.length == 0) return results;

    level += 1;
    length = subArr.length;
    nodeResults[level] = subArr;
    results[level] = subResults;
  }

  return results;
    
};
module.exports = levelOrder;
