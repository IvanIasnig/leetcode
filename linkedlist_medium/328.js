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

var oddEvenList = function (head) {
  let newNode = new ListNode();
  let even = newNode;
  let odd = head;

  while (head && head.next) {
    let temp = head.next;
    newNode.next = temp;
    newNode = newNode.next;

    head.next = head.next.next;
    head = head.next;
    if (head && !head.next) {
      newNode.next = null;
    }
  }
  //mi manca da fare l'intersezione
  return odd; //dispari
  return even; //pari
};

console.dir(oddEvenList(node1), { depth: null });
