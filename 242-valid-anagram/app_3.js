class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split("").sort().join("") === t.split("").sort().join("");
    }
}
module.exports = (...args) => new Solution().isAnagram(...args);
