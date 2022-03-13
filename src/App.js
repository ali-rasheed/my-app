import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState, useEffect } from "react";
import MouseCursor from './MouseCursor';


function App() {
  const [count, setCount] = useState(0);
  const [word, setText] = useState("");

  return (
    <>
      <MouseCursor color={count > 5 ? "#00F" : "#F00"} />

      <header>

      </header>
      <div>
        <p>the word is {word} </p>
      </div>
      <input onChange={(event) => setText(event.target.value)}>

      </input>
      <button onClick={() => setCount(count + 1)}>
        click to count
      </button>
      {count !== 0 && <p>the number of counts is = {count}</p>}
    </>
  );
}

export default App;
