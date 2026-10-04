class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let isPal = undefined;
        const stringArr = s.split(" ").join("").toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
        const half = stringArr.length / 2;

        
        // 9 / 2 = 4.5
        // string.slice(indexStart, indexEnd)
        const firstHalf = stringArr.slice(0, Math.floor(half));
        const secondHalf = stringArr.slice(Math.ceil(half), stringArr.length).split("").reverse().join("");

        return firstHalf === secondHalf;
    }
}

module.exports = (...args) => new Solution().isPalindrome(...args);
