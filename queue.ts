import { Node } from "./node";

class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value: number): void {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue(): Node | null {
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
      console.log("La cola está vacía");
      return;
    }
    let current: Node | null = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
