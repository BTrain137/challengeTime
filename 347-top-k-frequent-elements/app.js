class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(let i = 0; i<nums.length; i+=1) {
            const num = nums[i];
            let frequency = 0;
            if(map.has(num)) {
                frequency = map.get(num);
            }
            map.set(num, frequency+=1);
        }

        const arr = [];
        for(const [key, value] of map) {
            if (value >= k) {
                arr.push(key);
            }
        }

        return arr;
    }
}
module.exports = (...args) => new Solution().topKFrequent(...args);
