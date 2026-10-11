class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length - 1;

        // Invariant: if target is in nums, it's somewhere in [start, end].
        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);

            if (nums[mid] === target) return mid;

            // Any split of a rotated array leaves at least one half sorted.
            // Find the sorted half, then check if target lies inside it.
            if (nums[start] <= nums[mid]) {
                // Left half [start, mid] is sorted.
                if (nums[start] <= target && target < nums[mid]) end = mid - 1;
                else start = mid + 1;
            } else {
                // Right half [mid, end] is sorted.
                if (nums[mid] < target && target <= nums[end]) start = mid + 1;
                else end = mid - 1;
            }
        }

        // Range is empty: target was never in nums.
        return -1;
    }
}
module.exports = (...args) => new Solution().search(...args);
