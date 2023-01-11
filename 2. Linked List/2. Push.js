class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Push Adds a new node at the end of the list
  push(val) {
    let newNode = new Node(val);
    // If there is no head meaning the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // If there is items in the list
    else{
        this.tail.next = newNode
        this.tail = newNode
    }

    // increase the list length
    this.length++;

    //return the updated list
    return this
  }
}

let list = new SinglyLinkedList();
list.push("hello")
list.push("hi")
list.push("there")

console.log(list.push("bye bye"))
