import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter App</h1>
      <h3>{counter}</h3>
      <button onClick={addOne}>+</button>
      <button onClick={remove}>-</button>
    </>
  );
}

export default App;
