function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(6);

let node5 = new ListNode(4);
let node6 = new ListNode(5);
let node7 = new ListNode(7);
let node8 = new ListNode(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

var hasCycle = function (head) {
  while (head) {
    head.mem = true;

    if (head.next && head.next.mem) {
      return true;
    }

    head = head.next;
  }
  return false;
};

console.dir(hasCycle(node1), { depth: null });
