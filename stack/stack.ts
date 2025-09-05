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
      // Si la pila está vacía
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Agregar al inicio (top de la pila)
      newNode.next = this.head;
      this.head = newNode;
    }
    
    console.log(`Elemento ${value} agregado a la pila`);
  }

  pop(): Node | null {
    if (this.head === null) {
      console.log("La pila está vacía");
      return null;
    }
    
    const removedNode = this.head;
    this.head = this.head.next;
    
    
    if (this.head === null) {
      this.tail = null;
    }
    
    removedNode.next = null;
    console.log(`Elemento ${removedNode.value} removido de la pila`);
    return removedNode;
  }

  list(): void {
    if (this.head === null) {
      console.log("La pila está vacía");
      return;
    }
    
    console.log("Elementos en la pila (top primero):");
    let current: Node | null = this.head;
    while (current !== null) {
      console.log(`| ${current.value} |`);
      console.log("-----");
      current = current.next;
    }
  }

  peek(): number | null {
    if (this.head === null) {
      return null;
    }
    return this.head.value;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}