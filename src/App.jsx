import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 123, name: "Nike Shoe", completed: true },
    { id: 124, name: "Puma boots", completed: false },
    { id: 125, name: "addidas wear", completed: true },
  ]);
  return (
    <>
      <div className="App">
        <h1>Task List</h1>
        <ul>
          
        </ul>
    </div>
    </>
  );
};

export default App;