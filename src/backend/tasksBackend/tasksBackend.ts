import { Task, TaskDTO } from "../../store";

export const TasksBackend = {
  addTask(data: Task, list: TaskDTO[]): TaskDTO[] {
    return [...list, { ...data, id: (+new Date()).toString(16) }];
  },

  removeTask(id: string, list: TaskDTO[]): TaskDTO[] {
    return list.filter((item) => item.id !== id);
  },

  updateTask(data: TaskDTO, list: TaskDTO[]): TaskDTO[] {
    return list.map((item) => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });
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
