import { useState } from "react";

import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  let handleincrement = () => {
    setcount(count + 1);
  };

  let handledecrement = () => {
    setcount(count - 1);
  };

  let handlereset = () => {
    setcount(0);
  };
  return (
    <div className="div">
      <h1 className="text-bold">COUNTER APP</h1>
      <div className="main_div">
        <button className="p-10 m-10" onClick={handledecrement}>
          -
        </button>
        <h2>{count}</h2>
        <button onClick={handleincrement}>+</button>
      </div>
      <button className="reset_btn" onClick={handlereset}>
        RESET
      </button>
    </div>
  );
}

export default App;
