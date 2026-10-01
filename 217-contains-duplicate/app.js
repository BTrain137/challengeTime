class Solution {
    compareNumbers(a, b) {
       return a - b;
    }
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.sort(this.compareNumbers)
        for (let i = 0; i < sortedNums.length; i+=1) {
            if(sortedNums[i] == sortedNums[i+1]) {
                return true;
            }
        }
        return false;
    }
}

module.exports = (...args) => new Solution().hasDuplicate(...args);
