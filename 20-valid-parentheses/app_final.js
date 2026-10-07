class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // closing bracket -> the opening bracket it must close
        const pairs = { ')': '(', ']': '[', '}': '{' };
        // Invariant: openBraces holds the still-unclosed opening brackets, most recent on top.
        const openBraces = [];

        for (const symbol of s) {
            if (symbol in pairs) {
                // Must close the most recent open bracket; an empty stack pops undefined, which never matches.
                if (openBraces.pop() !== pairs[symbol]) return false;
            } else {
                openBraces.push(symbol);
            }
        }

        // Anything left was opened but never closed.
        return openBraces.length === 0;
    }
}
module.exports = (...args) => new Solution().isValid(...args);
