import { useState, ChangeEvent, MouseEventHandler } from "react";
import Button from "../Button";
import style from './Form.module.scss'


function Form(props: any) {
  const [values, setValues] = useState({
    task: '',
    time: '00:00:00'
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value
    setValues({...values, [name]:value} )
  }
  
  const addTask = (event: any) => {
    event.preventDefault()
    props.setTasks((tasks: any) => {
      return [...tasks, values]
    })
    setValues({
      task: '',
      time: '00:00:00'
    })
  }
  return (
    <form action="" className={style.newTask}>
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
          min="00:00:00"
          max="01:30:00"
					required
        />
      </div>
      <Button text="Add" onClick={addTask}/>
    </form>
  );
}

export default Form;
