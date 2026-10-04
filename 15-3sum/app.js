class Solution {
    findNextUnique(nums, index, direction) {
        let steps = direction;
        let currentI = index;
        let nextI = currentI + direction; // Add a negative still subtracts;
        while(nums[currentI] == nums[nextI]) {
            steps += direction;
            currentI += direction;
            nextI += direction;
        }
        return steps
    }
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const results = [], lens = nums.length;
        let i = 0, j = i + 1, k = lens - 1;

        while(i < lens) {
            const numI = nums[i], numJ = nums[j], numK = nums[k];
            const sum = numI + numJ + numK;

            if(sum == 0) {
                results.push([nums[i], nums[j], nums[k]]);
                // choose j to ++ or k to --
                k -=1;
            }

            if(sum > 0) {
                const steps = this.findNextUnique(nums, k, -1);
                k += steps;
            }
            if(sum < 0) {
                const steps = this.findNextUnique(nums, j, +1);
                j += steps;
            }

            if(j > k || j == k) {
                const steps = this.findNextUnique(nums, i, +1);

                i += steps;
                j = i + 1;
                k = lens - 1;
            }
        }

        return results;
    }
}

module.exports = (...args) => new Solution().threeSum(...args);
