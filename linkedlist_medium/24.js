function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);
let node8 = new ListNode(8);
let node9 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

var swapPairs = function (head) {
  let newNode = head;

  var recFunction = function (par) {
    if (!par || !par.next) {
      return par;
    }

    let temp = par.val;
    par.val = par.next.val;
    par.next.val = temp;
    par = par.next.next;
    return swapPairs(par);
  };

  recFunction(newNode);

  return head;
};

console.dir(swapPairs(node1), { depth: null });
