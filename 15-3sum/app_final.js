class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const results = [];

        // i needs two indices to its right, so it stops at length - 3.
        for (let i = 0; i <= nums.length - 3; i++) {
            // Same value as the previous i would rebuild the same triplets.
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Sorted Two Sum on nums[i+1..] for target -nums[i].
            let j = i + 1, k = nums.length - 1;
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum < 0) {
                    j++;          // too small: only a bigger j can help
                } else if (sum > 0) {
                    k--;          // too big: only a smaller k can help
                } else {
                    results.push([nums[i], nums[j], nums[k]]);
                    // Move j past every copy of the value just used, so the
                    // same pair isn't found again. k gets fixed by the loop.
                    j++;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                }
            }
        }

        return results;
    }
}

module.exports = (...args) => new Solution().threeSum(...args);
