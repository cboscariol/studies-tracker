import Item from "./Item";
import style from "./List.module.scss";
import { ITask } from "../../types/ITask";

interface ListProps {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void //tipando função: arrow function, passa o parametro que deve ser recebido, e o que ela vai retornar
}

function List({ tasks, selectTask }: ListProps ) {
  return (
    <aside className={style.listTasks}>
      <h2> Today's studies </h2>
      <ul>
        {tasks.map((task: ITask) => (
          <Item
            {...task}
            key={task.id} // spread de task, manda tudo que tem dentro de task como props
            selectTask={selectTask}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
