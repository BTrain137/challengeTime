// Builds a tree from LeetCode's level-order array, e.g. [3,9,20,null,null,15,7].
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function toTree(arr) {
    if (!arr.length || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) queue.push(node.left = new TreeNode(arr[i]));
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) queue.push(node.right = new TreeNode(arr[i]));
        i++;
    }
    return root;
}

// p and q are nodes in the tree, not plain values, so look them up by val.
function find(node, val) {
    if (!node || node.val === val) return node;
    return find(node.left, val) || find(node.right, val);
}

// Builds the tree, passes the real p/q nodes, and returns the answer's val.
function run(lowestCommonAncestor, arr, p, q) {
    const root = toTree(arr);
    return lowestCommonAncestor(root, find(root, p), find(root, q))?.val;
}

describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("lowestCommonAncestor (%s)", (_, lowestCommonAncestor) => {
    it("[6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", () => {
        expect(run(lowestCommonAncestor, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)).toBe(6)
    });

    it("[6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", () => {
        expect(run(lowestCommonAncestor, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)).toBe(2)
    });

    it("[2,1], p = 2, q = 1", () => {
        expect(run(lowestCommonAncestor, [2, 1], 2, 1)).toBe(2)
    });

    it("[6,2,8,0,4,7,9,null,null,3,5], p = 8, q = 2", () => {
        expect(run(lowestCommonAncestor, [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 8, 2)).toBe(6)
    });
});
