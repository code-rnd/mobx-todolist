import { Task, TaskDTO } from "../../store";

export const TasksBackend = {
  addTask(data: Task, list: TaskDTO[]): TaskDTO[] {
    return [...list, { ...data, id: (+new Date()).toString(16) }];
  },

  completeTask(id: string, list: TaskDTO[]): TaskDTO[] {
    return list.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
  },
};
