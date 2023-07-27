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

let node4 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

var mergeTwoLists = function (list1, list2) {
    nh = {val: -1, next: null}
    while(list1 && list2){

    }
  return list1;
};

console.dir(mergeTwoLists(node1, node4), { depth: null });
