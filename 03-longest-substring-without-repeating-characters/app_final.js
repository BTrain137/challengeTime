class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Invariant: window holds exactly the characters of s[left..right], no repeats.
        const window = new Set();
        let longestSubStringLength = 0;

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            // Shrink from the left until s[right] is no longer a duplicate.
            while (window.has(s[right])) {
                window.delete(s[left]);
                left += 1;
            }
            window.add(s[right]);
            longestSubStringLength = Math.max(longestSubStringLength, right - left + 1);
        }

        return longestSubStringLength;
    }
}
module.exports = (...args) => new Solution().lengthOfLongestSubstring(...args);
