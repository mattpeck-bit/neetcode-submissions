class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let myMap = {};

        for(let i = 0; i < strs.length; i++){
            let count = new Array<number>(26).fill(0);

            for(let k = 0; k < strs[i].length; k++){
                count[strs[i].charCodeAt(k) - 97] += 1;
            }

            let key = count.join(',');

            if(!myMap[key]){
                myMap[key] = [];
            }

            myMap[key].push(strs[i])
        }

        return Object.values(myMap);
    }

}
