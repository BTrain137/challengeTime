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
])("kthSmallest (%s)", (_, kthSmallest) => {
    it("[5,3,6,2,4,null,null,1], k = 5", () => {
        expect(kthSmallest(toTree([5, 3, 6, 2, 4, null, null, 1]), 5)).toBe(5)
    });

    it("[3,1,4,null,2], k = 1", () => {
        expect(kthSmallest(toTree([3, 1, 4, null, 2]), 1)).toBe(1)
    });

    it("[5,3,6,2,4,null,null,1], k = 3", () => {
        expect(kthSmallest(toTree([5, 3, 6, 2, 4, null, null, 1]), 3)).toBe(3)
    });

    it("[5,3,6,2,4,null,null,1], k = 4", () => {
        expect(kthSmallest(toTree([5, 3, 6, 2, 4, null, null, 1]), 4)).toBe(4)
    });

    it("[5,3,6,2,4,null,null,1], k = 6", () => {
        expect(kthSmallest(toTree([5, 3, 6, 2, 4, null, null, 1]), 6)).toBe(6)
    });

    it("[3,1,8,null,null,6,null,5], k = 3", () => {
        expect(kthSmallest(toTree([3, 1, 8, null, null, 6, null, 5]), 3)).toBe(5)
    });

    it("[3,1,8,null,null,6,null,5], k = 4", () => {
        expect(kthSmallest(toTree([3, 1, 8, null, null, 6, null, 5]), 4)).toBe(6)
    });
});
