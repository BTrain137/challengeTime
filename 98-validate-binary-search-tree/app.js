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

  let nodeRow = [root];
  let nodesMinMax = [{min: null, max: null}];
  
  while(nodeRow.length > 0) {
    const tempRow = [];
    const tempMinMax = [];
    for(let i = 0; i < nodeRow.length; i +=1) {
      const node = nodeRow[i];
      const { val } = node;
      const { min, max } = nodesMinMax[i];
      if((min !== null && val <= min) || (max !== null && val >= max)) {
        return false;
      }

      if(node.left) tempRow.push(node.left), tempMinMax.push({min: min, max: val});
      if(node.right) tempRow.push(node.right), tempMinMax.push({ min: val, max: max});
    }

    nodeRow = tempRow;
    nodesMinMax = tempMinMax;
  }

  return true;
    
};
module.exports = isValidBST;
