describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("search (%s)", (_, search) => {
    it("[-1,0,2,4,6,8], 4", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 4)).toBe(3)
    });

    it("[1,2], 2", () => {
        expect(search([1,2], 2)).toBe(1)
    });

    it("[-1,0,2,4,6,8], 3", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 3)).toBe(-1)
    });

    // Added by interview-add-test
    it("[5], 5", () => {
        expect(search([5], 5)).toBe(0)
    });

    it("[5], 3", () => {
        expect(search([5], 3)).toBe(-1)
    });

    it("[1,2], 1", () => {
        expect(search([1, 2], 1)).toBe(0)
    });

    it("[1,2], 2", () => {
        expect(search([1, 2], 2)).toBe(1)
    });

    it("[-1,0,2,4,6,8], -1", () => {
        expect(search([-1, 0, 2, 4, 6, 8], -1)).toBe(0)
    });

    it("[-1,0,2,4,6,8], 8", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 8)).toBe(5)
    });

    it("[-1,0,2,4,6,8], -5", () => {
        expect(search([-1, 0, 2, 4, 6, 8], -5)).toBe(-1)
    });

    it("[-1,0,2,4,6,8], 10", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 10)).toBe(-1)
    });

    it("[-9999,0,9999], 9999", () => {
        expect(search([-9999, 0, 9999], 9999)).toBe(2)
    });

    it("[-50,-40,-30,-20,-10], -20", () => {
        expect(search([-50, -40, -30, -20, -10], -20)).toBe(3)
    });

    it("[1,3,5,7,9,11,13], 11", () => {
        expect(search([1, 3, 5, 7, 9, 11, 13], 11)).toBe(5)
    });

    it("[1,3,5,7,9,11,13], 12", () => {
        expect(search([1, 3, 5, 7, 9, 11, 13], 12)).toBe(-1)
    });

    it("random 1: 17 values", () => {
        expect(search([-43, -41, -37, -36, -35, -22, -19, -16, -8, -2, 1, 3, 12, 15, 19, 23, 27], -43)).toBe(0)
    });

    it("random 2: 5 values", () => {
        expect(search([-42, -16, 13, 19, 30], 33)).toBe(-1)
    });

    it("random 3: 6 values", () => {
        expect(search([-42, -20, -4, 19, 29, 48], -20)).toBe(1)
    });

    it("random 4: 12 values", () => {
        expect(search([-46, -26, -24, -15, -13, -3, 5, 15, 22, 33, 42, 46], 39)).toBe(-1)
    });

    it("random 5: 9 values", () => {
        expect(search([-50, -38, -20, -19, -11, -3, 8, 28, 29], -11)).toBe(4)
    });
});

// Speed checks the O(log n) target, not the constraints (max length 10,000).
// One linear scan of 100,000 is still fast, so each test runs 20,000 searches:
// O(n) per search takes seconds, O(log n) takes milliseconds.
describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, search) => {
    const n = 100_000;
    const nums = Array.from({ length: n }, (_, i) => i * 2);

    it("n = 100,000, target is the last element, 20,000 searches", () => {
        let result;
        const start = performance.now();
        for (let i = 0; i < 20_000; i++) result = search(nums, (n - 1) * 2);
        expect(performance.now() - start).toBeLessThan(1000);
        expect(result).toBe(n - 1);
    });

    it("n = 100,000, target missing (odd), 20,000 searches", () => {
        let result;
        const start = performance.now();
        for (let i = 0; i < 20_000; i++) result = search(nums, n - 1);
        expect(performance.now() - start).toBeLessThan(1000);
        expect(result).toBe(-1);
    });
});
