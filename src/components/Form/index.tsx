import Button from "../Button";

function Form() {
  return (
    <form action="">
      <div>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
					required
        />
      </div>
      <Button />
    </form>
  );
}

export default Form;
