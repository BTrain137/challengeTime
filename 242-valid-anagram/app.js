class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const map = {}
        for (let i = 0; i < s.length; i+=1) {
            map[s[i]] = !!map[s[i]] ? map[s[i]] ++ : 1;
            map[t[i]] = !!map[t[i]] ? map[t[i]] ++ : 1;
        }
        for (const letter in map) {
            const isOdd = map[letter] % 2 != 0 ? true: false;
            if(isOdd) return false;
        }
        return true;
    }
}
module.exports = (...args) => new Solution().isAnagram(...args);
