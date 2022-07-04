import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from '../../types/ITask'
import {v4 as uuidv4} from "uuid"

function Form(props: any) {

  const [values, setValues] = useState({
    task: "",
    time: "00:00:00", 
    selected: false,
    completed: false,
    id: uuidv4()
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    props.setTasks((currentTasks: ITask[]) => { //setState por receber uma callback
      return [...currentTasks, values]; //Pego as tarefas que já estavam no array e adiciono as novas
    });
    setValues({
      task: "",
      time: "00:00:00",
      selected: false,
      completed: false,
      id: uuidv4()
    });
  };
  return (
    <form onSubmit={addTask} className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          value={values.task}
          onChange={handleChange}
          id="task"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="text"
          step="1"
          name="time"
          value={values.time}
          onChange={handleChange}
          id="time"
          min="00:00:01"
          max="01:30:00"
          required
        />
      </div>
      <Button text="Add" type="submit" />
    </form>
  );
}

export default Form;
