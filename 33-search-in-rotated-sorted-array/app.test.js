describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("search (%s)", (_, search) => {
    it("[3,4,5,6,1,2], 1", () => {
        expect(search([3, 4, 5, 6, 1, 2], 1)).toBe(4)
    });

    it("[3,5,6,0,1,2], 4", () => {
        expect(search([3, 5, 6, 0, 1, 2], 4)).toBe(-1)
    });
});
