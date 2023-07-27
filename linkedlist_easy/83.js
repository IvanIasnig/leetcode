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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(1);



node1.next = node2;
node2.next = node3;


var deleteDuplicates = function (head) {
  let res = head;
    while (head && head.next) {
      let  temp = head.val;
      while (head.next && temp === head.next.val) {
        head.next = head.next.next;
      }
      head = head.next;
    }
   return res;
};

console.dir(deleteDuplicates(node1), { depth: null });
