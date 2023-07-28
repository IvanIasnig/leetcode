/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(6);
let nodoneeeee = new ListNode(100);

let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(7);
let node8 = new ListNode(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = nodoneeeee;

node5.next = node6;
node6.next = node7;
node7.next = node8;

var mergeTwoLists = function (list1, list2) {
  nh = { val: 0, next: null };
  let temp = nh;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      nh.next = list1;
      list1 = list1.next;
    } else {
      nh.next = list2;
      list2 = list2.next;
    }
    nh = nh.next;
  }
  if (list1) {
    nh.next = list1;
  }
  if (list2) {
    nh.next = list2;
  }

  return temp.next;
};

console.dir(mergeTwoLists(node1, node5), { depth: null });
