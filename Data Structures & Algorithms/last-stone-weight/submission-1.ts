class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let i = 0;
        let sorted = stones.sort((a, b) => b - a);
        while(sorted.length > 1){
            sorted.sort((a, b) => b - a);
            if (sorted[0] === sorted[1]){
                sorted.shift();
                sorted.shift();
            }
            else{
                if (sorted[0] > sorted [1]){
                    sorted[1] = sorted[0] - sorted[1];
                    sorted.shift();
                }
                else{
                    sorted[1] = sorted[1] - sorted[0];
                    sorted.shift();
                }
            }
        }
        if(sorted.length === 1){
            return sorted[0];
        }
        else return 0;
    }
}
