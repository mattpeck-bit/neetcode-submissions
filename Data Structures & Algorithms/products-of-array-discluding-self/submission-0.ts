class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        let before: number[] = [];
        let after: number[] = [];
        let prod: number[] = [];

        for(let i = 0; i < nums.length; i++){
            if (i === 0){before.push(1);}
            else{
                before.push(before[i-1]*nums[i-1]);
            }
        }

        for(let k = 0; k < nums.length; k++){
            if (k === 0){after.push(1);}
            else{
                after.push(after[k-1]*nums[nums.length - k]);
            }
        }

        after.reverse();

        for(let y = 0; y < nums.length; y++){
            prod.push(before[y] * after[y]);
        }

        return prod;
    }
}
