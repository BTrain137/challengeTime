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
    let currentNode = root;

    // Both p and q are always inside currentNode's subtree, so it's a common ancestor.
    // Keep stepping down while both sit on the same side; that child is a lower common ancestor.
    while (true) {
        if (p.val < currentNode.val && q.val < currentNode.val) {
            currentNode = currentNode.left;
        } else if (p.val > currentNode.val && q.val > currentNode.val) {
            currentNode = currentNode.right;
        } else {
            // The fork: p and q go different ways, or currentNode is p or q itself.
            return currentNode;
        }
    }
};
module.exports = lowestCommonAncestor;
