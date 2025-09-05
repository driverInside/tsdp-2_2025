import { Node } from "./node";

class Stack {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value: number): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  pop(): Node | null {
    if (this.head === null) {
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    removedNode.next = null;
    return removedNode;
  }

  list(): void {
    if (this.head === null) {
      console.log("La pila está vacía");
      return;
    }
    let current: Node | null = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
