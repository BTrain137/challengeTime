class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i+=1) {
            for (let j = 1; j < nums.length; j+=1) {
                const firstNum = nums[i];
                const secondNum = nums[j];
                const sum = firstNum + secondNum;
                if (sum === target) {
                    return [i, j]
                }
            }
        }
    }
}

// Wrap the class so tests can call it like a plain function
module.exports = (nums, target) => new Solution().twoSum(nums, target);
