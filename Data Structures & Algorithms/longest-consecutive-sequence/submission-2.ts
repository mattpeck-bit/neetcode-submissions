class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        if(nums.length === 0) {return 0;}
        const numSet: Set<number> = new Set<number>(nums);
        let dist = 0;
        let lastSeq = 0;
        let seqLen = 1;
        for(let i = 0; i < nums.length; i++){
            //Check to see if the number is the start of the sequence
            if((!numSet.has(nums[i] - 1)) && (numSet.has(nums[i] + 1))){
                //If it's the start of a sequence, we know the sequence has 1
                if(seqLen > lastSeq) {lastSeq = seqLen;}
                seqLen = 1;
                dist = 1;
                //Then we need to run the length of the sequence
                while(numSet.has(nums[i] + dist)){
                    seqLen++;
                    dist++;
                }
            }
        }
        if(seqLen > lastSeq) {lastSeq = seqLen;}

        return lastSeq;

    }
}
