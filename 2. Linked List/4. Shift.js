// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   // Push Adds a new node at the end of the list
//   push(val) {
//     let newNode = new Node(val);
//     // If there is no head meaning the list is empty
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     }

//     // If there is items in the list
//     else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     // increase the list length
//     this.length++;

//     //return the updated list
//     return this;
//   }

//   // Pop the last item
//   pop() {
//     // If there is no head meaning the list is empty and return undefined
//     if (!this.head) {
//       return undefined;
//     }

//     // If the list length is 1
//     if (this.length === 1) {
//       this.head = this.tail = null;
//       this.length = 0;
//       return this;
//     }

//     // If the list is not empty or have just one item
//     let currentNode = this.head;
//     let newTail = currentNode;

//     // Looking for the second last item
//     while (currentNode.next) {
//       newTail = currentNode;
//       currentNode = currentNode.next;
//     }

//     // Make the second last item the new tail
//     this.length--;
//     newTail.next = null;
//     this.tail = newTail;

//     // Return updated listg
//     return this;
//   }

//   shift() {
//     // If there is no head meaning the list is empty and return undefined
//     if (!this.head) {
//       return undefined;
//     }
//     // If the list length is 1
//     if (this.length === 1) {
//         this.head = this.tail = null;
//         this.length = 0;
//         return this;
//       }

//     // Make the second item the new head
//     this.head = this.head.next
//     this.length--;
//     return this
//   }
// }

// let list = new SinglyLinkedList();
// list.push("hello");
// // list.push("hi");
// list.push("there");

// console.log(list.shift());

setTimeout(()=>{
  console.log("first time out")
},1000)

setTimeout(()=>{
  console.log("second time out")
  process.nextTick(()=>{
    console.log("inner next tick inside second timeout")
  })
},700)

setTimeout(()=>{
  console.log("third time out")
},0)

process.nextTick(() => console.log("first next tick"));
process.nextTick(() => {
  console.log("second next tick");
  Promise.resolve().then(() =>
    console.log("inner promise inside second next tick")
  );
});
process.nextTick(() => console.log("Third next tick"));

Promise.resolve().then(() => console.log("first promise"));
Promise.resolve().then(() => {
  console.log("second promise");
  process.nextTick(() =>
    console.log("inner next tick queue inside second promise")
  );
});
Promise.resolve().then(() => console.log("Third promise"));
