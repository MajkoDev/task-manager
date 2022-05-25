import { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

function TaskForm() {
  const { addTask, clearList } = useContext(TaskListContext);

  const [title, setTitle] = useState("");

  // take value from input fields and set new title
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // prevents reloading website
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    // clear input field
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        value={title}
        type='text'
        className='task-input'
        placeholder='Add Task...'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          Add Task
        </button>
        <button
          type='submit'
          className='btn clear-btn'
          onClick={() => clearList()}>
          Clear
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
