import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [x, setx] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const value = inputRef.current.value;
    if(!value) return alert("Add the Task")
    const newData = { completed: false, value };
    setx([...x, newData]);
    inputRef.current.value = "";
  };
  const itemDone = (index) => {
    const newX = [...x];
    x[index].completed = !x[index].completed;
    setx(newX);
  };
  const delItem = (index) => {
    const newX = [...x];
    newX.splice(index, 1);
    setx(newX);
  };
  return (
    <div className="App">
      <h2>TODO List</h2>

      <input ref={inputRef} placeholder="enter new task ..." />

      <button onClick={add}>Add</button>
      <ul>
        {x.map(({ value, completed }, index) => {
          return (
            <div className="main">
              <li
                className={completed ? "diffstyle" : ""}
                key={index}
                onClick={() => itemDone(index)}
              >
                {completed ? "✅" : "⏰"}
                {value}
              </li>
              <span onClick={() => delItem(index)}>❌</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
