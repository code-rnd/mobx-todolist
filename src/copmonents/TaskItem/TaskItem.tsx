import { FC } from "react";
import { observer } from "mobx-react-lite";

import { TaskDTO, tasks } from "../../store";
import { cn } from "../../shared";

import s from "./TaskItem.module.scss";

export const TaskItem: FC<TaskDTO> = observer((props) => {
  const { id, theme, isDone } = props;

  const completeHandler = () => {
    tasks.completeTask(id);
  };

  return (
    <div className={cn([s.container])} onClick={completeHandler}>
      <div className={s.icon} />
      <div>{theme}</div>
      <div className={cn([s.checkbox, isDone && s.isDone])} />
    </div>
  );
});
