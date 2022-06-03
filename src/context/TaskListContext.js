import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {


  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  //? EDIT TASKS
  // state for task
  const [editItem, setEditItem] = useState(null);

  // function to find item with array method
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  // function to edit task

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
