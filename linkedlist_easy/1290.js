function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(0);
let node3 = new ListNode(1);
let node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  let res = 0;
  while (head) {
    res = res * 2 + head.val;
    head = head.next;
  }
  return res;
};

console.log(getDecimalValue(node1));
