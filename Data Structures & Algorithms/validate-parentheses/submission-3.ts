class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        let myStack: string[] = []; 
        let closerFlag = false;
        for(let i = 0; i<s.length; i++){
            switch(s[i]){
                case '(':
                case '{':
                case '[':
                if(i === s.length - 1) return false;
                else{
                    myStack.push(s[i]);
                    break;}
                case ')':
                closerFlag = true;
                    if(myStack[myStack.length - 1] === '(') {
                        myStack.pop();
                        break;
                    }
                    else return false;
                case ']':
                                closerFlag = true;

                    if(myStack[myStack.length - 1] === '[') {
                        myStack.pop();
                        break;
                    }
                    else return false;
                    case '}':
                                    closerFlag = true;

                    if(myStack[myStack.length - 1] === '{') {
                        myStack.pop();
                        break;
                    }
                    else return false;
                default:
                    return false;
                break;
            }
        }
        if(myStack.length > 0) return false;
        return true;
    }
}
