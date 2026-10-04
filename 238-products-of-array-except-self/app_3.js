class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //  [1,2,4,6]
        
        const results = [];
        let prefixValue = 1;
        let suffixValue = 1;
        const prefixArr = [prefixValue];
        const suffixArr  = [];
        suffixArr[nums.length - 1] = suffixValue;

        //  0  1  2  3
        // [1, 1, 2, 8]
        for (let i = 1; i<nums.length; i+=1) {
            const num = nums[i - 1] * prefixValue;
            prefixValue = prefixArr[i] = num;
        }
           
        //   0  1  2 3
        // [48, 24 6,1]1
        for (let i = nums.length - 1 - 1; i>=0; i-=1) {
            const num = nums[i + 1] * suffixValue;
            suffixValue = suffixArr[i] = num;
        }

        // [48, 24, 12, 8]
        for (let i = 0; i < nums.length; i+=1) {
            const value = prefixArr[i] * suffixArr[i] + 0;
            results.push(value);
        }

        return results
    }
}
module.exports = (...args) => new Solution().productExceptSelf(...args);
