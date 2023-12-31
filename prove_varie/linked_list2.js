class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//const n1 = new Node(100);
// console.log(n1); Node { data: 100, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first
  insertFirst(data) {
    this.head = new Node(data, this.head); //inserisce all'inizio
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      //if empty make head
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      //se index is out of range
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head); //if first index
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after the index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2);

ll.clearList();

//ll.removeAt(3);
ll.printListData();
//ll.getAt(2);
