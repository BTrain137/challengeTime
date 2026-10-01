class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const map = {}
        for (const letter of s) {
            map[letter] = !!map[letter] ? map[letter] + 1: 1;
        }
        for (const letter of t) {
            if(!!map[letter]) {
                map[letter] = map[letter] - 1
            }
            else {
                return false
            }
        }
        // for (const letter in map) {
        //     if(map[letter] != 0) {
        //         return false
        //     }
        // }
        return true
    }
}
module.exports = (...args) => new Solution().isAnagram(...args);
