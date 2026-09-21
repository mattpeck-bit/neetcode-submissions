class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let myMap = new Map();

        for(let i = 0; i < nums.length; i++){
            let temp = target - nums[i];
            if(myMap.has(temp)){ return [i, myMap.get(temp)]}
            myMap.set(nums[i], i);
        }
    }
}
