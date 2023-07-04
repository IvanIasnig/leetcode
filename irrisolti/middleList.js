/*qui mi chiedeva di risolvere il problema con le linked list
il mio risultato è corretto, ma non funziona perchè non so cosa
sia una linked list */
//https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    
    start = 0
    end = head.length -1 
    ris = []
    while(start <= end){
        ris[start] = head[end]
        start++
        end --
    }
    return ris
};

console.log(middleNode([[1,2,3,4,5,6,7]]))