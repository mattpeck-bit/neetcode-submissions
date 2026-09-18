class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        let s_sort = s.split("").sort().join("");
        let t_sort = t.split("").sort().join("");
        if(s_sort == t_sort) {return true;}
        else return false;
    }
}
