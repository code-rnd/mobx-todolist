import { makeAutoObservable } from "mobx";
import { Task, TaskDTO } from "./tasks.models";
import { TasksBackend } from "../../backend";

class Tasks {
  isLoading = false;
  list: TaskDTO[] = [];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addTask(data: Task) {
    this.list = TasksBackend.addTask(data, this.list);
  }

  removeTask(id: string) {
    this.list = TasksBackend.removeTask(id, this.list);
  }

  updateTask(data: TaskDTO) {
    this.list = TasksBackend.updateTask(data, this.list);
  }

  completeTask(id: string) {
    this.list = TasksBackend.completeTask(id, this.list);
  }
}

export const tasks = new Tasks();
