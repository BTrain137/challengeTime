describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
    ["app_4", require("./app_4")],
])("productExceptSelf (%s)", (_, productExceptSelf) => {
    it("[1,2,4,6]", () => {
        expect(productExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8])
    });

    it("[-1,0,1,2,3]", () => {
        expect(productExceptSelf([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0])
    });

    // Added by interview-add-test
    it("two elements [3,5]", () => {
        expect(productExceptSelf([3,5])).toEqual([5,3])
    });

    it("all equal [2,2,2]", () => {
        expect(productExceptSelf([2,2,2])).toEqual([4,4,4])
    });

    it("all ones [1,1,1,1]", () => {
        expect(productExceptSelf([1,1,1,1])).toEqual([1,1,1,1])
    });

    it("one zero in the middle [2,3,0,4]", () => {
        expect(productExceptSelf([2,3,0,4])).toEqual([0,0,24,0])
    });

    it("two zeros [0,1,0,2]", () => {
        expect(productExceptSelf([0,1,0,2])).toEqual([0,0,0,0])
    });

    it("zero first [0,2,3]", () => {
        expect(productExceptSelf([0,2,3])).toEqual([6,0,0])
    });

    it("zero last [2,3,0]", () => {
        expect(productExceptSelf([2,3,0])).toEqual([0,0,6])
    });

    it("all negative [-1,-2,-3]", () => {
        expect(productExceptSelf([-1,-2,-3])).toEqual([6,3,2])
    });

    it("bounds [30,-30,1]", () => {
        expect(productExceptSelf([30,-30,1])).toEqual([-30,30,-900])
    });

    it("zero first, negative after [0,-3,4]", () => {
        expect(productExceptSelf([0,-3,4])).toEqual([-12,0,0])
    });

    it("random 1: 9 values", () => {
        expect(productExceptSelf([2,-3,-2,-2,-3,2,3,-2,-3])).toEqual([1296,-864,-1296,-1296,-864,1296,864,-1296,-864])
    });

    it("random 2: 16 values", () => {
        expect(productExceptSelf([1,1,-2,3,-3,1,0,-2,2,1,0,2,2,-1,-2,1])).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it("random 3: 17 values", () => {
        expect(productExceptSelf([2,1,-2,-3,0,-3,-1,2,-1,-2,-2,-1,3,2,3,2,-1])).toEqual([0,0,0,0,-10368,0,0,0,0,0,0,0,0,0,0,0,0])
    });

    it("random 4: 11 values", () => {
        expect(productExceptSelf([-3,1,0,2,3,-3,1,-3,-3,2,-1])).toEqual([0,0,-972,0,0,0,0,0,0,0,0])
    });

    it("random 5: 10 values", () => {
        expect(productExceptSelf([1,3,1,2,-2,2,1,2,-1,2])).toEqual([96,32,96,48,-48,48,96,48,-96,48])
    });
});

// Speed: checks the target complexity (O(n)), not the constraints' cap.
// Products are kept to 1s and 2s so they stay inside 32 bits.
// describe.each([
//     ["app", require("./app")],
//     ["app_2", require("./app_2")],
//     ["app_3", require("./app_3")],
//     ["app_4", require("./app_4")],
// ])("speed (%s)", (_, productExceptSelf) => {
//     it("n = 100,000, all ones except a 2 at the end", () => {
//         const n = 100_000;
//         const nums = Array(n).fill(1);
//         nums[n - 1] = 2;
//         const expected = Array(n).fill(2);
//         expected[n - 1] = 1;
//         const start = performance.now();
//         expect(productExceptSelf(nums)).toEqual(expected);
//         expect(performance.now() - start).toBeLessThan(1000);
//     });

//     it("n = 100,000, one zero at the start", () => {
//         const n = 100_000;
//         const nums = Array(n).fill(1);
//         nums[0] = 0;
//         const expected = Array(n).fill(0);
//         expected[0] = 1;
//         const start = performance.now();
//         expect(productExceptSelf(nums)).toEqual(expected);
//         expect(performance.now() - start).toBeLessThan(1000);
//     });
// });
