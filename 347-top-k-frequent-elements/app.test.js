const sorted = (arr) => Array.isArray(arr) ? [...arr].sort((a, b) => a - b) : arr;

describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
])("topKFrequent (%s)", (_, topKFrequent) => {
    it("[1,2,2,3,3,3], k = 2", () => {
        expect(sorted(topKFrequent([1, 2, 2, 3, 3, 3], 2))).toEqual([2, 3])
    });

    it("[7,7], k = 1", () => {
        expect(sorted(topKFrequent([7, 7], 1))).toEqual([7])
    });

    it("[1,1,1,2,2,3], k = 1", () => {
        expect(sorted(topKFrequent([1, 1, 1, 2, 2, 3], 1))).toEqual([1])
    });

    // Added by interview-add-test
    it("[5], k = 1", () => {
        expect(sorted(topKFrequent([5], 1))).toEqual([5])
    });

    it("[1,2,3], k = 3", () => {
        expect(sorted(topKFrequent([1, 2, 3], 3))).toEqual([1, 2, 3])
    });

    it("[-1,-1,-2], k = 1", () => {
        expect(sorted(topKFrequent([-1, -1, -2], 1))).toEqual([-1])
    });

    it("[1000,1000,-1000], k = 2", () => {
        expect(sorted(topKFrequent([1000, 1000, -1000], 2))).toEqual([-1000, 1000])
    });

    it("[0,0,0,5], k = 1", () => {
        expect(sorted(topKFrequent([0, 0, 0, 5], 1))).toEqual([0])
    });

    it("[4,1,2,2,3,3,3], k = 1", () => {
        expect(sorted(topKFrequent([4, 1, 2, 2, 3, 3, 3], 1))).toEqual([3])
    });

    it("[9,1,1], k = 1", () => {
        expect(sorted(topKFrequent([9, 1, 1], 1))).toEqual([1])
    });

    it("[10,10,20], k = 1", () => {
        expect(sorted(topKFrequent([10, 10, 20], 1))).toEqual([10])
    });

    it("[1,1,2,2,3], k = 2", () => {
        expect(sorted(topKFrequent([1, 1, 2, 2, 3], 2))).toEqual([1, 2])
    });

    it("[3,1,3,2,1,3], k = 2", () => {
        expect(sorted(topKFrequent([3, 1, 3, 2, 1, 3], 2))).toEqual([1, 3])
    });

    it("random 1: 6 values", () => {
        expect(sorted(topKFrequent([4, 4, 4, -1, -2, 4], 1))).toEqual([4])
    });

    it("random 2: 8 values", () => {
        expect(sorted(topKFrequent([4, -1, 5, -4, 4, -2, -5, 0], 1))).toEqual([4])
    });

    it("random 3: 14 values", () => {
        expect(sorted(topKFrequent([-5, -3, -5, 4, 5, -3, 3, -3, -1, -5, -5, -4, -2, 0], 9))).toEqual([-5, -4, -3, -2, -1, 0, 3, 4, 5])
    });

    it("random 4: 15 values", () => {
        expect(sorted(topKFrequent([0, -1, -3, -5, -2, 0, -2, 5, 4, 1, -4, 5, 1, 1, -4], 1))).toEqual([1])
    });

    it("random 5: 18 values", () => {
        expect(sorted(topKFrequent([2, 0, 3, 2, 4, -2, -4, 0, -5, 4, -2, 2, 0, -5, -5, 0, -1, 5], 1))).toEqual([0])
    });
});

// Max length is 10^4; n = 100,000 checks the O(n) target, not the constraints.
// -1000..999 appear 49 times each, interleaved; 1000 appears 2,000 times at the end.
describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
])("speed (%s)", (_, topKFrequent) => {
    const nums = Array.from({ length: 98_000 }, (_, i) => (i % 2000) - 1000)
        .concat(Array(2000).fill(1000));

    it("n = 100,000, k = 1, top value at the end", () => {
        const start = performance.now();
        expect(sorted(topKFrequent(nums, 1))).toEqual([1000]);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, k = 2001 (every distinct value)", () => {
        const start = performance.now();
        expect(sorted(topKFrequent(nums, 2001))).toEqual(Array.from({ length: 2001 }, (_, i) => i - 1000));
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
