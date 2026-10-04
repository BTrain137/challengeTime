class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productOfAllNums = 1; // if there is a 0 everything is 0, except for the 0 value since its removed
        let results = [];
        const len = nums.length;

        // if there is 1 zero then all is zero but 1
        // if there is 2 zero all is zero.
        let hasOneZero = false
        let hasTwoZero = false
        let zeroIndexOf = null;

        for(let i = 0; i<len; i+=1) {
            if(nums[i] == 0) {
                if(hasOneZero) {
                    hasTwoZero = true;
                }
                else if(hasTwoZero) {
                    return Array(len).fill(0);
                }
                else {
                    hasOneZero = true;
                    zeroIndexOf = i;
                }
            }
            else {
                productOfAllNums = productOfAllNums * nums[i];
            }
        }

        if(hasOneZero) {
            results = Array(len).fill(0);
            results[zeroIndexOf] = productOfAllNums;
            return results;
        }

        for(let j = 0; j<len; j+=1) {
            const result = productOfAllNums / nums[j];
            results.push(result);
        }

        return results;
    }
}

module.exports = (...args) => new Solution().productExceptSelf(...args);
