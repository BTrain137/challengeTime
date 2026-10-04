// Output may be in any order, so normalize: sort each triplet, then sort the list.
const normalize = (triplets) =>
    Array.isArray(triplets) ? triplets.map((t) => [...t].sort((a, b) => a - b)).sort((a, b) => String(a).localeCompare(String(b))) : triplets;

describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("threeSum (%s)", (_, threeSum) => {
    it("[-1,0,1,2,-1,-4]", () => {
        expect(normalize(threeSum([-1, 0, 1, 2, -1, -4]))).toEqual(normalize([[-1, -1, 2], [-1, 0, 1]]))
    });

    it("[0,1,1]", () => {
        expect(normalize(threeSum([0, 1, 1]))).toEqual([])
    });

    it("[0,0,0]", () => {
        expect(normalize(threeSum([0, 0, 0]))).toEqual([[0, 0, 0]])
    });

    it("[-5,-2,1]", () => {
        expect(normalize(threeSum([-5, -2, 1]))).toEqual([])
    });

    it("[-2,0,0,2,2]", () => {
        expect(normalize(threeSum([-2, 0, 0, 2, 2]))).toEqual([[-2, 0, 2]])
    });

    it("[-10,-5,-2,1]", () => {
        expect(normalize(threeSum([-10, -5, -2, 1]))).toEqual([])
    });
});
