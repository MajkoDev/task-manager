import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  // initial state
  const [tasks, setTasks] = useState([
    { title: "Read the book", id: 1 },
    { title: "Write some code", id: 2 },
    { title: "Listen to podcast", id: 3 },
  ]);

  // function to add task
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }]);
  };

  // function to delete task
  // filter items based on id of task selected
  // if condition is true then Id of current task dont equal actual Id, task will be kept in array
  // if false then task will be filtered
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // function to clear list = set Tasks as empty
  const clearList = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearList }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
