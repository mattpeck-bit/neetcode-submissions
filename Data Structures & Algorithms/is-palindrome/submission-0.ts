class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean 
    {
        const cleanString: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for(let i = 0; i < cleanString.length; i++){
            if(cleanString[i] != cleanString[cleanString.length - 1 - i]){return false}
        }
        return true;
    }
}
