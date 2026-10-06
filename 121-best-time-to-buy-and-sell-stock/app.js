class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let mostProfitableTrade = 0;

        for(let i = 0; i < prices.length - 1; i +=1) {
            for (let j = i + 1; j < prices.length; j +=1) {
                const profit = prices[j] - prices[i];
                if(profit > mostProfitableTrade) {
                    mostProfitableTrade = profit;
                }
            }

        }

        return mostProfitableTrade;
    }
}
module.exports = (...args) => new Solution().maxProfit(...args);
