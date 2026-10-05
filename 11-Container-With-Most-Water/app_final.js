class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;
        // Start at max width; every pair skipped by a move can't beat what we've seen.
        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            const area = Math.min(heights[i], heights[j]) * (j - i);
            result = Math.max(result, area);

            // The shorter bar has just had its best possible pair (widest, height capped
            // by itself), so drop it. On a tie, either side is safe to drop.
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return result;
    }
}
module.exports = (...args) => new Solution().maxArea(...args);
