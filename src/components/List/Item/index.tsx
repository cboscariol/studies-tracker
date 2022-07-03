import style from "./Item.module.scss";
import { ITask } from "../../../types/ITask";

interface ItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void; //tipando função: arrow function, passa o parametro que deve ser recebido, e o que ela vai retornar
}

function Item({ task, time, selected, completed, id, selectTask }: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''}`} //conditional classname
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default Item;
