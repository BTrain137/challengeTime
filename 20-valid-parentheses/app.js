class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openBraces = [];

        for(let i = 0; i < s.length; i += 1) {
            const symbol = s[i];
            if(symbol == '(' || symbol == '[' || symbol == '{' ) {
                openBraces.push(symbol);
            }
            else {
                const lastOpen = openBraces.pop();
                if(lastOpen == '(') {
                    if(symbol == ')') continue;
                    else return false;
                }
                else if(lastOpen == '[') {
                    if(symbol == ']') continue;
                    else return false;
                }
                else if(lastOpen == '{') {
                    if(symbol == '}') continue;
                    else return false;
                }
                else {
                    return false;
                }
            }
        }

        if (openBraces.length > 0) {
            return false;
        }
        return true;
    }
}
module.exports = (...args) => new Solution().isValid(...args);
