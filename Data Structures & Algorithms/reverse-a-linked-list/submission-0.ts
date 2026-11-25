/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        if (head === null) {
            return null;
        }
        let current = head;
        let iterationflag = true;
        let prev, store;
        while (current !== null){
            store = current.next;
            if(iterationflag){
                current.next = null;
                prev = current;
                iterationflag = false;
            }
            else{
                current.next = prev;
                prev = current;
            }
            current = store;
        }

        return prev;  
    }
}
