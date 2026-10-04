class Solution {
    isValidChar(char) {
        return /^[a-z0-9]$/i.test(char);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let prefixIndex = 0;
        let suffixIndex = s.length - 1;

        // Invariant: every alphanumeric pair outside [prefixIndex, suffixIndex] already matched.
        while (prefixIndex < suffixIndex) {
            // Each pointer skips junk on its own, but never past the other pointer,
            // so neither can run off the end of the string.
            while (prefixIndex < suffixIndex && !this.isValidChar(s[prefixIndex])) prefixIndex += 1;
            while (prefixIndex < suffixIndex && !this.isValidChar(s[suffixIndex])) suffixIndex -= 1;

            if (s[prefixIndex].toLowerCase() !== s[suffixIndex].toLowerCase()) return false;

            prefixIndex += 1;
            suffixIndex -= 1;
        }

        // Pointers met or crossed: no pair ever mismatched.
        return true;
    }
}

module.exports = (...args) => new Solution().isPalindrome(...args);
