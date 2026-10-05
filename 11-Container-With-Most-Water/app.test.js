describe.each([
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
    ["app_final", require("./app_final")],
])("maxArea (%s)", (_, maxArea) => {
    it("[1,7,2,5,4,7,3,6]", () => {
        expect(maxArea([1, 7, 2, 5, 4, 7, 3, 6])).toBe(36)
    });

    it("[2,2,2]", () => {
        expect(maxArea([2, 2, 2])).toBe(4)
    });

    it("[5,5]", () => {
        expect(maxArea([5, 5])).toBe(5)
    });

    it("[1,1,100,100]", () => {
        expect(maxArea([1, 1, 100, 100])).toBe(100)
    });
});
