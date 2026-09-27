class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let prof = 0;
        for(let i = 0; i < prices.length; i++){
            for (let k = i+1; k < prices.length; k++){
                let diff = prices[k] - prices[i];
                if (diff > prof){prof = diff;}
            }
        }
        return prof;
    }
}
