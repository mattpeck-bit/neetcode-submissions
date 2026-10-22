class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let nmbrs: number[] = [];
        let res: string = "";

        for(let i = 0; i < strs.length; i++){
            let len = strs[i].length;
            let toAdd = String(len) + "#";
            res += toAdd;
            res += strs[i];
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res: string[] = [];
        let numString = "";
        for(let k = 0; k < str.length; k++){
            if(str[k] === "#"){
                let myNum = Number(numString);
                let myStr = str.slice(k+1, k+1+myNum);

                res.push(myStr);
                numString = "";

                k += myNum;
            }
            else{
                numString += str[k];
            }
        }
        return res;
    }
}
