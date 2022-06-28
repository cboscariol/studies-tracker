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
  ];

  return (
    <aside>
      <h2> Today's studies </h2>
      <ul>
        {tasks.map((task) => (
          <li>
            <h3>{task.title}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
