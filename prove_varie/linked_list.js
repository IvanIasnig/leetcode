function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
let head = node1; // la linked list è ora 1 -> 2 -> 3

let currentNode = head;

while(currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}
