import style from "./Item.module.scss";
import { ITask } from "../../../types/ITask";

interface ItemProps extends ITask {
  selectTask: (selectedTask: ITask) => void; //tipando função: arrow function, passa o parametro que deve ser recebido, e o que ela vai retornar
}

function Item({ task, time, selected, completed, id, selectTask }: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`} //conditional classname
      onClick={() => !completed && //execultando função de maneira condicional
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
      {completed && <span className={style.completed}></span>}
    </li>
  );
}

export default Item;
