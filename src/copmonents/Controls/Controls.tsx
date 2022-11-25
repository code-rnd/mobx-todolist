import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import { tasks } from "../../store";

import s from "./Controls.module.scss";

export const Controls: FC = observer(() => {
  const [value, setValue] = useState("");

  const addHandler = () => {
    tasks.addTask({ theme: value, date: new Date(), isDone: false });
    setValue("");
  };

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
      />
      <button disabled={!value} onClick={addHandler}>
        +
      </button>
    </div>
  );
});
