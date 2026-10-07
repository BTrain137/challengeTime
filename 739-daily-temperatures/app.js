class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const resultDays = [];
        let previousDaysStack = [];

        for(let i = 0; i < temperatures.length; i += 1) {
            const currentDayTemp = temperatures[i];
            let previousDayIndex = previousDaysStack[previousDaysStack.length - 1];
            let previousDayTemp = temperatures[previousDayIndex];
            while(previousDaysStack.length > 0 && previousDayTemp < currentDayTemp) {
                previousDaysStack.pop();
                const daysHavePassed = i - previousDayIndex;
                resultDays[previousDayIndex] = daysHavePassed;

                previousDayIndex = previousDaysStack[previousDaysStack.length - 1];
                previousDayTemp = temperatures[previousDayIndex];
            }

            previousDaysStack.push(i);
            resultDays[i] = 0;
        }

        return resultDays;
    }
}
module.exports = (...args) => new Solution().dailyTemperatures(...args);
