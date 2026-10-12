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

  const results = [];
  let row = [root]; // invariant: every node on the current level, left to right

  while(row.length > 0) {
    const nextRow = [];
    const values = [];
    for(const node of row) {
      values.push(node.val); // record THIS level's values, so root isn't a special case
      if(node.left) nextRow.push(node.left);
      if(node.right) nextRow.push(node.right);
    }

    results.push(values); // row is non-empty here, so values is too
    row = nextRow;
  }

  return results;
};
module.exports = levelOrder;
