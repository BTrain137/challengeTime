class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //  [1,2,4,6]

        let prefixVal = 1, suffixVal = 1;
        const results = [prefixVal];

        //  0  1  2  3
        // [1, 1, 2, 8]
        for (let i = 1; i < nums.length; i +=1 ) {
            const result = nums[i - 1] * prefixVal;
            prefixVal = results[i] = result + 0;
        }

        //   0  1  2 3
        // [48, 24 6,1]
        for (let i = nums.length - 1 - 1; i >=0; i -= 1) {
            const result = nums[i + 1] * suffixVal;
            suffixVal = result;

            results[i] = results[i] * result + 0;
        }

        // [48, 24, 12, 8]
        return results;
    }
}
module.exports = (...args) => new Solution().productExceptSelf(...args);
