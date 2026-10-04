class Solution {
    isValidChar(char) {
        return /^[a-z0-9]$/i.test(char);
    }
    nextValidIndex(str, index, direction) {
        if(direction == 'ltr') {
            for(let i = index; i < str.length; i+=1) {
                if(this.isValidChar(str[i])) {
                    return i;
                }
            }
        }
        else if (direction == 'rtl') {
            for(let i = index; i > 0; i-=1) {
                if(this.isValidChar(str[i])) {
                    return i;
                }
            }
        }

    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let prefixIndex = 0;
        let suffixIndex = s.length - 1;

        while(prefixIndex < suffixIndex) {
            prefixIndex = this.nextValidIndex(s, prefixIndex, 'ltr');
            suffixIndex = this.nextValidIndex(s, suffixIndex, 'rtl');

            if(s[prefixIndex]?.toLowerCase() == s[suffixIndex]?.toLowerCase()) {
                if(prefixIndex > suffixIndex) {
                    return true;
                }
                prefixIndex += 1;
                suffixIndex -= 1;
                continue
            }
            else {
                return false;
            }

        }
        return true;
    }
}

module.exports = (...args) => new Solution().isPalindrome(...args);
