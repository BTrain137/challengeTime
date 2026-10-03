class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const slots = []

        for (let i = 0; i<nums.length; i+=1) {
            const num = nums[i];
            let count = map.has(num) ? map.get(num) : 0;
            map.set(num, count+=1);
        }

        for (const [key, value] of map) {
            if(!!slots[value]) {
                slots[value].push(key)
            }
            else {
                slots[value] = [key]
            }
        }

        const arr = []
        for (let j = slots.length; arr.length < k; j-=1) {
            if(!!slots[j]) {
                for (let h = 0; h <slots[j].length; h+=1) {
                    arr.push(slots[j][h]);
                }
            }
        }

        return arr
    }
}
module.exports = (...args) => new Solution().topKFrequent(...args);
