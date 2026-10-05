class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let result = 0;

        let pointer1 = 0;
        let pointer2 = pointer1 + 1;

        while(pointer1 < heights.length - 1) {
            const numMin = Math.min(heights[pointer1], heights[pointer2]);
            const distance = pointer2 - pointer1;
            const sum = numMin*distance;
            if(sum > result) {
                result = sum;
            }

            pointer2 += 1

            if(pointer2 >= heights.length) {
                pointer1 += 1;
                pointer2 = pointer1 + 1;
            }

        }

        return result;
    }
}
module.exports = (...args) => new Solution().maxArea(...args);
