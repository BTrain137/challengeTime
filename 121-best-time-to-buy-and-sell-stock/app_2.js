class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = prices[0];
        let mostProfit = 0;

        for(let i = 1; i < prices.length; i += 1) {
            const profit = prices[i] - lowestPrice;
            if (prices[i] < lowestPrice) {
                lowestPrice = prices[i];
            }
            if(profit > mostProfit) {
                mostProfit = profit;
            }
        }

        return mostProfit;
    }
}
module.exports = (...args) => new Solution().maxProfit(...args);
