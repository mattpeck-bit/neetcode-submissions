class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        let count = new Map<number, number>();

        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        
        let results: number[] = [];

        for (let i = 0; i < nums.length; i++){
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
        }

        for(const [num, itsCount] of count){
            freq[itsCount].push(num);
        }

        for(let y = freq.length - 1; y >= 0; y--){
            for(const item of freq[y]){
                results.push(item);
                if(results.length === k){
                    return results;
                }
            }
        }

        return results;
    }
}
