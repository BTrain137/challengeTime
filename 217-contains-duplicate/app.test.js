describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
])("hasDuplicate (%s)", (_, hasDuplicate) => {
    it("[1,2,3,3]", () => {
        expect(hasDuplicate([1, 2, 3, 3])).toBe(true)
    });

    it("[1,2,3,4]", () => {
        expect(hasDuplicate([1, 2, 3, 4])).toBe(false)
    });
})
