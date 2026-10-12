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

  let tempRow = [root];
  const results = [[root.val]];
  let index = 1;

  while(tempRow.length > 0) {
    const tempArr = [];
    const tempResult = [];
    for(let i = 0; i < tempRow.length; i+=1) {
      const node = tempRow[i];
      if(node.left) tempArr.push(node.left), tempResult.push(node.left.val);
      if(node.right) tempArr.push(node.right), tempResult.push(node.right.val);
    }

    tempRow = tempArr;
    if(tempArr.length) results[index] = tempResult;
    index+=1;
  }

  return results;
    
};
module.exports = levelOrder;
