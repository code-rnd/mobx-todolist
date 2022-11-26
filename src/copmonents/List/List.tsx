import { FC } from "react";
import { observer } from "mobx-react-lite";

import { tasks } from "../../store";
import { Controls } from "../Controls";

import s from "./List.module.scss";
import { TaskItem } from "../TaskItem";

export const List: FC = observer(() => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        Task manager {tasks.getTotal() ? <sub>{tasks.getTotal()}</sub> : ""}
      </div>
      <div className={s.list}>
        {!!tasks.getTotal() ? (
          <>
            {tasks.list.map((item) => (
              <TaskItem {...item} key={item.id} />
            ))}
          </>
        ) : (
          <div className={s.isEmpty}>list is empty..</div>
        )}
      </div>
      <Controls />
    </div>
  );
});
