import { FC } from "react";
import { observer } from "mobx-react-lite";

import { TaskDTO, tasks } from "../../store";
import { cn } from "../../shared";

import s from "./TaskItem.module.scss";

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

export const TaskItem: FC<TaskDTO> = observer((props) => {
  const { id, date, theme, isDone } = props;

  const dateTime = new Date(date).toLocaleTimeString(
    undefined,
    dateTimeFormatOptions
  );

  const completeHandler = () => {
    tasks.completeTask(id);
  };

  return (
    <div className={cn([s.container, !isDone && s.isNotDone])}>
      <div>{theme}</div>
      <div>{dateTime}</div>
      <input type="checkbox" checked={isDone} onChange={completeHandler} />
    </div>
  );
});
