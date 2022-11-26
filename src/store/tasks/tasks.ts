import { makeAutoObservable } from "mobx";
import { Task, TaskDTO } from "./tasks.models";
import { TasksBackend } from "../../backend";
import { TasksMocked } from "../../shared";

class Tasks {
  isLoading = false;
  list: TaskDTO[] = TasksMocked;

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addTask(data: Task) {
    this.list = TasksBackend.addTask(data, this.list);
  }

  completeTask(id: string) {
    this.list = TasksBackend.completeTask(id, this.list);
  }

  getTotal() {
    return this.list.length || 0;
  }
}

export const tasks = new Tasks();
