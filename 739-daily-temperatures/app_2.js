class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const result = new Array(n).fill(0);

        // Go backwards: everything to the right of i is already answered,
        // so result[j] says how far to jump to j's next warmer day.
        for (let i = n - 2; i >= 0; i -= 1) {
            let j = i + 1;

            // j isn't warmer (equal doesn't count), so skip the days between
            // j and j's next warmer day — they're all <= temperatures[j].
            while (temperatures[j] <= temperatures[i]) {
                // j has no warmer day ahead, so neither does i: leave it 0.
                if (result[j] === 0) {
                    j = -1;
                    break;
                }
                j += result[j];
            }

            if (j !== -1) {
                result[i] = j - i;
            }
        }

        return result;
    }
}
module.exports = (...args) => new Solution().dailyTemperatures(...args);
