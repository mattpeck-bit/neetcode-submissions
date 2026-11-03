class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        let size = 9;
        let rows: Set<any>[] = Array.from({ length: size }, () => new Set());
        let cols: Set<any>[] = Array.from({ length: size }, () => new Set());
        let squares: Set<any>[] = Array.from({ length: size }, () => new Set());

        //Fill our sets

        for(let i = 0; i < size; i++){
            for(let k = 0; k < size; k++){
                if(board[i][k] != "."){
                    let myNum = board[i][k];
                    let sqIn = Math.floor(i/3) * 3 + Math.floor(k/3);
                    if(rows[i].has(myNum) || cols[k].has(myNum) ||               
                    squares[sqIn].has(myNum)){
                        return false
                    }
                    else{
                        //Then add
                        rows[i].add(board[i][k]);
                        cols[k].add(board[i][k]);
                        squares[sqIn].add(board[i][k]);
                    }
                }
            }
        }

        return true;

    }
}