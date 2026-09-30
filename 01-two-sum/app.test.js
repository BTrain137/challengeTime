describe.each([
    ["app", require("./app")],
    ["app_1.v1", require("./app_1.v1")],
    ["app_1.v2", require("./app_1.v2")],
])("twoSum (%s)", (_, twoSum) => {
    it("[2, 7, 11, 15], 9", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1])
    });

    it("[0,4,3,0]), 0", () => {
        expect(twoSum([0,4,3,0], 0)).toEqual([0,3])
    });

    it("[-3,4,3,90], 0", () => {
        expect(twoSum([-3,4,3,90], 0)).toEqual([0,2])
    });

    it("[-1,-2,-3,-4,-5] -8", () => {
        expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual([2, 4])
    });

    it("[-1,-2,-3,-4,-5] -8", () => {
        expect(twoSum([150,24,79,50,88,345,3], 200)).toEqual([0, 3])
    });
})

// Follow-up: sorted input, O(1) space. app_1.v3 only works on sorted arrays.
describe("twoSum sorted input (app_1.v3)", () => {
    const twoSum = require("./app_1.v3");

    it("[1,3,4,6,8,11], 10", () => {
        expect(twoSum([1,3,4,6,8,11], 10)).toEqual([2,3])
    });

    it("[2,7,11,15], 9", () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    });

    it("[-5,-4,-3,-2,-1], -8", () => {
        expect(twoSum([-5,-4,-3,-2,-1], -8)).toEqual([0,2])
    });

    it("[5,5], 10", () => {
        expect(twoSum([5,5], 10)).toEqual([0,1])
    });

    it("[1,2,3,4,4,9,56,90], 8", () => {
        expect(twoSum([1,2,3,4,4,9,56,90], 8)).toEqual([3,4])
    });
});
