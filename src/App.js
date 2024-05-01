import { useState } from "react";
import "./App.css";

function App() {
  const [x, setx] = useState([]);

  return (
    <div className="App">
      <h2>TODO List</h2>

      <ul>
        {x.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <input placeholder="enter new task ..." />

      <button>Add</button>
    </div>
  );
}

export default App;
