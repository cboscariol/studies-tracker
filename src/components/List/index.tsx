import { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

type ItemProps = {
  task: string,
  time: string,
}

function List(props: any) {

  return (
    <aside className={style.listTasks}>
      <h2> Today's studies </h2>
      <ul>
        {props.tasks.map((task: ItemProps, index: number) => (
          <Item {...task} key={index} /> // spread de task, manda tudo que tem dentro de task como props (time e title)
        ))}
      </ul>
    </aside>
  );
}

export default List;
