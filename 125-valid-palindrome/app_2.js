class Solution {
    isAlphabetNumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let prefixChar = undefined;
        let prefixCharHasSet = false;
        let suffixChar = undefined;
        let suffixCharHasSet = false;
        
        let prefixPointer = 0;
        let suffixPointer = s.length - 1;
        while(true) {
            if(this.isAlphabetNumeric(s[prefixPointer])) {
                if(!prefixCharHasSet) {
                    prefixChar = s[prefixPointer].toLowerCase();
                    prefixCharHasSet = true;
                }
            }
            else {
                prefixPointer += 1;
            }
            if(this.isAlphabetNumeric(s[suffixPointer])) {
                if(!suffixCharHasSet) {
                    suffixChar = s[suffixPointer].toLowerCase();
                    suffixCharHasSet = true;
                }
            }
            else {
                suffixPointer -= 1;
            }

            if(prefixCharHasSet && suffixCharHasSet) {
                prefixCharHasSet = suffixCharHasSet = false;
                prefixPointer += 1;
                suffixPointer -= 1;
                if(prefixChar != suffixChar) {
                    return false;
                }
            }

            if(prefixPointer > suffixPointer) {
                return true;
            }
        }
    }
}

module.exports = (...args) => new Solution().isPalindrome(...args);
