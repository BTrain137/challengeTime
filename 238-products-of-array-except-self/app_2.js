class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const foreword_map = new Map();
        let foreword_product_result = 1;
        const backward_map = new Map();
        let backward_product_results = 1;
        const len = nums.length;
        const results = [];

        foreword_map.set(0, 1);
        for(let i = 1; i<len; i+=1) {
            foreword_product_result = foreword_product_result * nums[i - 1];
            foreword_product_result +=0;
            foreword_map.set(i, foreword_product_result);
        }

        backward_map.set(len-1, 1);
        for(let j = len-2; j>= 0; j-=1) {
            backward_product_results = backward_product_results * nums[j + 1]
            backward_map.set(j, backward_product_results);
        }

        for(let k = 0; k<len; k+=1) {
            const result = foreword_map.get(k) * backward_map.get(k);
            results.push(result);
        }
        return results;
    }
}

module.exports = (...args) => new Solution().productExceptSelf(...args);
