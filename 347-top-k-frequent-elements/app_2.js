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

        const sortedMapDesc = new Map([...map].sort((a,b) => b[1] - a[1]));

        let count = 0;
        const arr = [];
        for (const key of sortedMapDesc.keys()) {
            if(count >= k) return arr;
            arr.push(key);
            count +=1;
        }

        return arr;
    }
}
module.exports = (...args) => new Solution().topKFrequent(...args);
