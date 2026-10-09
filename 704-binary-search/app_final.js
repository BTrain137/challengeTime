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
            // Offset from start, so start + end can't overflow in fixed-width ints.
            const mid = start + Math.floor((end - start) / 2);

            if (nums[mid] === target) return mid;

            // mid is ruled out, so step past it; otherwise the range can stop shrinking.
            if (nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        }

        // Range is empty: start crossed end without finding target.
        return -1;
    }
}
module.exports = (...args) => new Solution().search(...args);
