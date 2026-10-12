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
    if (!root) return null;

    // BFS: every node is visited once and swaps its own children; no parent needed.
    const queue = [root];
    let pointer = 0; // read index instead of shift(), which is O(n) per call
    while (pointer < queue.length) {
        const node = queue[pointer++];
        // Swap the subtrees; null children swap just as well.
        [node.left, node.right] = [node.right, node.left];

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return root;
};
module.exports = invertTree;
