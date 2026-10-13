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

describe.each([
    ["app", require("./app")],
    ["app_final_bfs", require("./app_final_bfs")],
    ["app_final_dfs", require("./app_final_dfs")],
    ["app_final_recursive", require("./app_final_recursive")],
])("isValidBST (%s)", (_, isValidBST) => {
    it("[2,2,2]", () => {
        expect(isValidBST(toTree([2, 2, 2]))).toBe(false)
    });

    it("[2,1,3]", () => {
        expect(isValidBST(toTree([2, 1, 3]))).toBe(true)
    });

    it("[5,1,4,null,null,3,6]", () => {
        expect(isValidBST(toTree([5, 1, 4, null, null, 3, 6]))).toBe(false)
    });
});
