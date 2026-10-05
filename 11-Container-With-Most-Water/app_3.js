class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let results = 0;
        let i = 0;
        let j = heights.length - 1;
        while(i < j) {
            const minNum = Math.min(heights[i], heights[j]);
            const distance = j - i;
            const area = minNum * distance;
            if(area > results) results = area;

            if(heights[i] >= heights[j]) {
                j -= 1;
            }
            else {
                i += 1;
            }
        }

        return results;
    }
}
module.exports = (...args) => new Solution().maxArea(...args);
