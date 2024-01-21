import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>TailwIND Test</h1>
      <p>{counter}</p>
      <button onClick={addOne}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  );
}

export default App;
