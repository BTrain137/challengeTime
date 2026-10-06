class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length < 2) return s.length;

        const map = new Map();
        let longestSubStringLength = 1;
        map.set(s[0]);

        let left = 0;
        let right = left + 1;
        while(left < s.length - 1 && right < s.length) {
            if(map.has(s[right])) {
                map.delete(s[left]);
                left += 1;
                continue;
            }
            map.set(s[right]);
            right +=1;

            if(longestSubStringLength < map.size) {
                longestSubStringLength = map.size;
            }
        }

        return longestSubStringLength;
    }
}
module.exports = (...args) => new Solution().lengthOfLongestSubstring(...args);
