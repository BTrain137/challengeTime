describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("dailyTemperatures (%s)", (_, dailyTemperatures) => {
    it("[30,38,30,36,35,40,28]", () => {
        expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0])
    });

    it("[22,21,20]", () => {
        expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0])
    });
});
