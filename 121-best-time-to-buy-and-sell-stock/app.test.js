describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("maxProfit (%s)", (_, maxProfit) => {
    it("[10,1,5,6,7,1]", () => {
        expect(maxProfit([10, 1, 5, 6, 7, 1])).toBe(6)
    });

    it("[10,8,7,5,2]", () => {
        expect(maxProfit([10, 8, 7, 5, 2])).toBe(0)
    });

    it("[2,10,1,3]", () => {
        expect(maxProfit([2, 10, 1, 3])).toBe(8)
    });

    it("[2,10,1,3,20]", () => {
        expect(maxProfit([2, 10, 1, 3, 20])).toBe(19)
    });

    // Added by interview-add-test
    it("[5]", () => {
        expect(maxProfit([5])).toBe(0)
    });

    it("[3,3,3,3]", () => {
        expect(maxProfit([3, 3, 3, 3])).toBe(0)
    });

    it("[1,5]", () => {
        expect(maxProfit([1, 5])).toBe(4)
    });

    it("[1,2,3,4,5]", () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
    });

    it("[0,100]", () => {
        expect(maxProfit([0, 100])).toBe(100)
    });

    it("[3,8,1,2]", () => {
        expect(maxProfit([3, 8, 1, 2])).toBe(5)
    });

    it("[4,7,2,9,1]", () => {
        expect(maxProfit([4, 7, 2, 9, 1])).toBe(7)
    });

    it("[100,1,50]", () => {
        expect(maxProfit([100, 1, 50])).toBe(49)
    });

    it("[0,5,0,3]", () => {
        expect(maxProfit([0, 5, 0, 3])).toBe(5)
    });

    it("[1,3,1,3,1]", () => {
        expect(maxProfit([1, 3, 1, 3, 1])).toBe(2)
    });

    it("random 1: 14 values", () => {
        expect(maxProfit([52, 92, 70, 76, 69, 52, 15, 4, 22, 29, 100, 71, 67, 36])).toBe(96)
    });

    it("random 2: 9 values", () => {
        expect(maxProfit([10, 90, 85, 84, 45, 28, 84, 4, 77])).toBe(80)
    });

    it("random 3: 20 values", () => {
        expect(maxProfit([81, 11, 34, 65, 5, 27, 51, 77, 27, 52, 0, 58, 56, 65, 70, 86, 82, 23, 84, 43])).toBe(86)
    });

    it("random 4: 19 values", () => {
        expect(maxProfit([14, 85, 29, 1, 49, 2, 15, 94, 24, 32, 62, 74, 59, 81, 61, 62, 8, 27, 8])).toBe(93)
    });

    it("random 5: 19 values", () => {
        expect(maxProfit([98, 24, 82, 22, 42, 7, 2, 14, 35, 54, 100, 42, 38, 35, 63, 41, 2, 76, 43])).toBe(98)
    });
});

// Speed tests check the O(n) target complexity, not the constraints:
// n = 100,000 is past the 100-length cap on purpose.
describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, maxProfit) => {
    it("n = 100,000, strictly decreasing", () => {
        const n = 100_000;
        const prices = Array.from({ length: n }, (_, i) => n - i);
        const start = performance.now();
        expect(maxProfit(prices)).toBe(0);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, strictly increasing", () => {
        const n = 100_000;
        const prices = Array.from({ length: n }, (_, i) => i);
        const start = performance.now();
        expect(maxProfit(prices)).toBe(n - 1);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
