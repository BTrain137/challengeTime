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
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("levelOrder (%s)", (_, levelOrder) => {
    it("[3,9,20,null,null,15,7]", () => {
        expect(levelOrder(toTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]])
    });

    it("[1]", () => {
        expect(levelOrder(toTree([1]))).toEqual([[1]])
    });

    it("[]", () => {
        expect(levelOrder(toTree([]))).toEqual([])
    });
});
