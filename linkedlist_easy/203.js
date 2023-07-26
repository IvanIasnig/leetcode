/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(6);
let node4 = new ListNode(3);
let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

var removeElements = function (head, val) {
  if (!head) return null;

  if (head.val == val) {
    return removeElements(head.next, val);
  } else {
    head.next = removeElements(head.next, val);
    return head;
  }
};

console.log(removeElements(node1, 6));

//console.log(node1.next.val)
