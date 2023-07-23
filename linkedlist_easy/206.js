function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(100);
let node2 = new ListNode(200);
let node3 = new ListNode(300);
let node4 = new ListNode(400);
let node5 = new ListNode(500);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
//node5.next = node3;

let head = node1;

while (head !== null) {
  console.log(head.val);
  head = head.next;
}

// let i = 0;
// while (i < 12) {
//   console.log(head.val);
//   head = head.next;
//   i++;
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {};
