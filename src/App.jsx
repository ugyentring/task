import { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 123, name: "Nike Shoe", completed: true },
    { id: 124, name: "Puma boots", completed: false },
    { id: 125, name: "addidas wear", completed: true },
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className="App">
        <h1>Task List</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>
                {task.id} - {task.name}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
