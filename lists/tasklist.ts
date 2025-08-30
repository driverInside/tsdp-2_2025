import { TaskNode } from "./tasknode";

class TaskList {
  idCounter: number;
  head: TaskNode | null;
  constructor() {
    this.idCounter = 1;
    this.head = null;
  }

  addTask(title: string, completed = false) { }

  removeTask(id: number): boolean { return false; }

  listTasks(): void { }

  updateTask(id: number): boolean { return false; }
}
