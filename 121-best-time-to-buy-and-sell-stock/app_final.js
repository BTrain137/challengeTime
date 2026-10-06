class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Invariant: lowestPrice is the cheapest buy among days before i.
        let lowestPrice = prices[0];
        let mostProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            // Best trade that sells today = today's price minus cheapest earlier buy.
            mostProfit = Math.max(mostProfit, prices[i] - lowestPrice);
            // Update after selling, so today can only be a buy day for later days.
            lowestPrice = Math.min(lowestPrice, prices[i]);
        }

        return mostProfit;
    }
}
module.exports = (...args) => new Solution().maxProfit(...args);
