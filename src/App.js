import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [x, setx] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const value = inputRef.current.value
    setx([...x,value])
    inputRef.current.value = ""
  };

  return (
    <div className="App">
      <h2>TODO List</h2>

      <ul>
        {x.map((item,index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <input ref={inputRef} placeholder="enter new task ..." />

      <button onClick={add}>Add</button>
    </div>
  );
}

export default App;
