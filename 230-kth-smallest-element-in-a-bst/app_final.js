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
var kthSmallest = function(root, k) {
    // In-order (left, node, right) visits a BST in sorted order.
    // The stack holds ancestors whose left side is still being explored.
    const stack = [];
    let node = root;
    let count = 0;

    while (node || stack.length) {
        // Fresh node (start, or just stepped right): dive left, saving the path back up.
        while (node) {
            stack.push(node);
            node = node.left;
        }

        // Popped node's left side is done, so it's the next smallest value.
        node = stack.pop();
        if (++count === k) return node.val;

        // Everything in the right subtree comes before the ancestors still on the stack.
        node = node.right;
    }
    // ponytail: unreachable, constraints guarantee 1 <= k <= n
};
module.exports = kthSmallest;
