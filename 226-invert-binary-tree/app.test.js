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

// The reverse: tree back to a level-order array, trailing nulls trimmed.
function toArray(root) {
    const out = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        out.push(node ? node.val : null);
        if (node) queue.push(node.left, node.right);
    }
    while (out.length && out[out.length - 1] === null) out.pop();
    return out;
}

describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("invertTree (%s)", (_, invertTree) => {
    it("[4,2,7,1,3,6,9]", () => {
        expect(toArray(invertTree(toTree([4, 2, 7, 1, 3, 6, 9])))).toEqual([4, 7, 2, 9, 6, 3, 1])
    });

    it("[2,1,3]", () => {
        expect(toArray(invertTree(toTree([2, 1, 3])))).toEqual([2, 3, 1])
    });

    it("[]", () => {
        expect(invertTree(toTree([]))).toBeNull()
    });

    // Added by interview-add-test
    it("[1]", () => {
        expect(toArray(invertTree(toTree([1])))).toEqual([1])
    });

    it("[1,2]", () => {
        expect(toArray(invertTree(toTree([1, 2])))).toEqual([1, null, 2])
    });

    it("[1,null,2]", () => {
        expect(toArray(invertTree(toTree([1, null, 2])))).toEqual([1, 2])
    });

    it("[1,2,null,3]", () => {
        expect(toArray(invertTree(toTree([1, 2, null, 3])))).toEqual([1, null, 2, null, 3])
    });

    it("[1,null,2,null,3]", () => {
        expect(toArray(invertTree(toTree([1, null, 2, null, 3])))).toEqual([1, 2, null, 3])
    });

    it("[1,null,2,3]", () => {
        expect(toArray(invertTree(toTree([1, null, 2, 3])))).toEqual([1, 2, null, null, 3])
    });

    it("[1,2,null,null,3]", () => {
        expect(toArray(invertTree(toTree([1, 2, null, null, 3])))).toEqual([1, null, 2, 3])
    });

    it("[-100,100,0]", () => {
        expect(toArray(invertTree(toTree([-100, 100, 0])))).toEqual([-100, 0, 100])
    });

    it("[5,5,5,5,5]", () => {
        expect(toArray(invertTree(toTree([5, 5, 5, 5, 5])))).toEqual([5, 5, 5, null, null, 5, 5])
    });

    it("[4,2,7,1,null,null,9]", () => {
        expect(toArray(invertTree(toTree([4, 2, 7, 1, null, null, 9])))).toEqual([4, 7, 2, 9, null, null, 1])
    });

    it("[1,2,3,4,5,null,6,7]", () => {
        expect(toArray(invertTree(toTree([1, 2, 3, 4, 5, null, 6, 7])))).toEqual([1, 3, 2, 6, null, 5, 4, null, null, null, null, null, 7])
    });

    it("random 1: 14 nodes", () => {
        expect(toArray(invertTree(toTree([4, 40, 38, -70, null, null, 100, 34, -49, null, 70, -10, 69, null, 93, -77, 30, null, 1])))).toEqual([4, 38, 40, 100, null, null, -70, 70, null, -49, 34, 30, -77, 93, null, 69, -10, null, null, null, null, null, null, null, null, 1])
    });

    it("random 2: 17 nodes", () => {
        expect(toArray(invertTree(toTree([-46, -100, 11, 41, 63, null, -14, -72, -42, null, -95, null, -52, 23, 17, 22, -83, -84, 96, null, -56])))).toEqual([-46, 11, -100, -14, null, 63, 41, -52, null, -95, null, -42, -72, -56, null, 96, -84, -83, 22, 17, 23])
    });

    it("random 3: 11 nodes", () => {
        expect(toArray(invertTree(toTree([-86, null, -29, 99, -24, 26, -96, -14, -66, 6, 26, -17])))).toEqual([-86, -29, null, -24, 99, -66, -14, -96, 26, null, null, null, null, null, -17, 26, 6])
    });

    it("random 4: 8 nodes", () => {
        expect(toArray(invertTree(toTree([-98, 8, 98, 19, null, 17, -75, null, 34, 56])))).toEqual([-98, 98, 8, -75, 17, null, 19, null, null, null, 56, 34])
    });

    it("random 5: 15 nodes", () => {
        expect(toArray(invertTree(toTree([74, -75, -87, -32, 2, null, null, -10, -95, 88, 24, -8, -54, null, null, 99, -54, -43, 77])))).toEqual([74, -87, -75, null, null, 2, -32, 24, 88, -95, -10, 77, -43, -54, 99, null, null, -54, -8])
    });
});

// Speed checks the O(n) target, not the constraints (which cap the tree at 100 nodes).
describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, invertTree) => {
    it("n = 100,000, complete tree", () => {
        const n = 100_000;
        const nodes = Array.from({ length: n }, (_, i) => new TreeNode(i));
        for (let i = 0; i < n; i++) {
            nodes[i].left = nodes[2 * i + 1] || null;
            nodes[i].right = nodes[2 * i + 2] || null;
        }
        const start = performance.now();
        const root = invertTree(nodes[0]);
        expect(performance.now() - start).toBeLessThan(1000);
        expect(root).toBe(nodes[0]);
        // Inverted, every node's children trade places.
        for (let i = 0; i < n; i++) {
            expect(nodes[i].left).toBe(nodes[2 * i + 2] || null);
            expect(nodes[i].right).toBe(nodes[2 * i + 1] || null);
        }
    });
});
