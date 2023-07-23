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

// Creare i nodi come hai fatto tu
// let node1 = new ListNode(100);
// let node2 = new ListNode(200, node1);
// let node3 = new ListNode(300, node2);
// let node4 = new ListNode(400, node3);
// let node5 = new ListNode(500, node4);

// Funzione per stampare la lista collegata
function printLinkedList(head) {
  let currentNode = head;
  while (currentNode != null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
}

// Chiamata della funzione per stampare la lista a partire da node5
printLinkedList(node1);

// let i = 0;
// while (i < 12) {
//   console.log(head.val);
//   head = head.next;
//   i++;
// }

var reverseList = function (head) {
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};


console.log("***********")
console.log(reverseList(node1))