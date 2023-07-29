function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  let node1 = new ListNode(0);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  let node4 = new ListNode(6);
  let node5 = new ListNode(8);
  let node6 = new ListNode(0);
  let node7 = new ListNode(7);
  let node8 = new ListNode(0);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;

  var swapPairs = function(head) {

    var rec = function (){
        
    } 
  };

console.log(deleteNode(node1, 0))