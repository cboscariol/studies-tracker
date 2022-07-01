import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const tasks = [
    {
      title: "React",
      time: "02:00:00",
    },
    {
      title: "JS",
      time: "01:30:00",
    },
    {
      title: "TS",
      time: "00:30:00",
    },
  ];

  return (
    <aside className={style.listTasks}>
      <h2> Today's studies </h2>
      <ul>
        {tasks.map((task, index) => (
          <Item {...task} key={index} /> // spread de task, manda tudo que tem dentro de task como props (time e title)
        ))}
      </ul>
    </aside>
  );
}

export default List;
