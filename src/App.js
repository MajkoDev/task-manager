import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className='body'>
        <div className='App'>
          <Header />
          <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
