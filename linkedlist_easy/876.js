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

var middleNode = function (head) {
  let tot = 0;
  let linked = head;
  while (linked) {
    tot++;
    linked = linked.next;
  }

  tot = Math.floor(tot / 2);
  let i = 0;

  while (i < tot) {
    i++;
    head = head.next;
  }
  return head;
};

console.log(middleNode(node1));
