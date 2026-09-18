class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for(let i=0; i<nums.length; i++){
            for(let k=i+1; k<nums.length; k++){
                if(nums[i] == nums[k]){return true;}
            }
        }
        return false;
    }
}
