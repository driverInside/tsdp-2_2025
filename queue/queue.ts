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
    
    console.log(`Elemento ${value} agregado a la cola`);
  }

  dequeue(): Node | null {
    if (this.head === null) {
      console.log("La cola está vacía");
      return null;
    }
    
    const removedNode = this.head;
    this.head = this.head.next;
    
  
    if (this.head === null) {
      this.tail = null;
    }
    
    removedNode.next = null;
    console.log(`Elemento ${removedNode.value} removido de la cola`);
    return removedNode;
  }

  list(): void {
    if (this.head === null) {
      console.log("La cola está vacía");
      return;
    }
    
    console.log("Elementos en la cola (frente primero):");
    let current: Node | null = this.head;
    let position = 1;
    while (current !== null) {
      console.log(`${position}. ${current.value}`);
      current = current.next;
      position++;
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

  
  size(): number {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
}


const main = () => {
  const cola = new Queue();
  
  console.log("=== EJEMPLO DE COLA (QUEUE) ===");
  

  cola.enqueue(10);
  cola.enqueue(20);
  cola.enqueue(30);
  cola.enqueue(40);
  

  cola.list();
  
  console.log("Frente de la cola:", cola.peek());
  console.log("Tamaño de la cola:", cola.size());
  
  cola.dequeue();
  cola.list();
  
  cola.dequeue();
  cola.dequeue();
  cola.dequeue(); 
  cola.list();
  
  console.log("¿La cola está vacía?", cola.isEmpty());
};
