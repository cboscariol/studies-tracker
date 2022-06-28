import style from './Button.module.scss'

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
    }
  ];

  return (
    <aside className={style.listTasks}>
      <h2> Today's studies </h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={style.item}>
            <h3>{task.title}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
