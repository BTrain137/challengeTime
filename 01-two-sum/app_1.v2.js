class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = new Map();
        for (let i = 0; i < nums.length; i+=1) {
            const complement = target - nums[i];
            if (numToIndex.has(complement)) {
                return [numToIndex.get(complement), i];
            }
            numToIndex.set(nums[i], i);
        }
    }
}

// Wrap the NeetCode class so tests can call it like a plain function
module.exports = (nums, target) => new Solution().twoSum(nums, target);
