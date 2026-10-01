class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        const length = nums.length;
        let continueLoop = true;
        let i = 0;
        while(continueLoop) {
            const num = nums[i];
            if (map.has(num)) return true;
            map.set(num);
            i+=1;
            if(i >= length) return false;
        }
    }
}

module.exports = (...args) => new Solution().hasDuplicate(...args);
