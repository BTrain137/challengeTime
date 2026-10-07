class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Days that never find a warmer day keep their 0.
        const resultDays = new Array(temperatures.length).fill(0);
        // Indexes of days still waiting; their temps are decreasing bottom to top.
        const previousDaysStack = [];

        for (let i = 0; i < temperatures.length; i += 1) {
            const currentDayTemp = temperatures[i];

            // Today closes every waiting day colder than it. Stop at the first one
            // that isn't: everything below it is even warmer.
            while (
                previousDaysStack.length > 0 &&
                temperatures[previousDaysStack[previousDaysStack.length - 1]] < currentDayTemp
            ) {
                const previousDayIndex = previousDaysStack.pop();
                resultDays[previousDayIndex] = i - previousDayIndex;
            }

            previousDaysStack.push(i);
        }

        return resultDays;
    }
}
module.exports = (...args) => new Solution().dailyTemperatures(...args);
