export interface Task {
  theme: string;
  date: Date;
  isDone: boolean;
  description?: string;
}

export interface TaskDTO {
  id: string;
  theme: string;
  date: Date;
  isDone: boolean;
  description?: string;
}
