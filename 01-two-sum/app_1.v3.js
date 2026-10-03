// Follow-up: the input is SORTED and we must use O(1) extra space (Two Sum II, #167).
// Two pointers instead of a hash map. Only correct on sorted input.
class Solution {
    /**
     * @param {number[]} numbers - sorted ascending
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;                   // smallest value still in play
        let right = numbers.length - 1; // largest value still in play

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left, right];
            }
            if (sum < target) {
                // Too small: even the largest partner can't save numbers[left], so drop it
                left += 1;
            } else {
                // Too big: even the smallest partner is too much for numbers[right], so drop it
                right -= 1;
            }
        }
        return []; // unreachable: the problem guarantees one answer
    }
}

// Wrap the class so tests can call it like a plain function
module.exports = (numbers, target) => new Solution().twoSum(numbers, target);
