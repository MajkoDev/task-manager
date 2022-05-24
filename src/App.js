import "./App.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className='body'>
        <div className='App'>
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
