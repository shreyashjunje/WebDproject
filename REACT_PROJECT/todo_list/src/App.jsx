import { SquarePlus } from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");

  function handleaddtask() {
    console.log("hi there");
  }
  return (
    <div>
      <div id="main_div">
        <div id="input_div">
          <input type="text" placeholder="Title.." />
          {/* <input type="text" placeholder="About.." />  */}
        </div>

        <div>
          <SquarePlus onClick={handleaddtask} size={50} color="#FF8303" />
        </div>
      </div>

      <h4>Todo task</h4>

      <ul>
        {todos.map((todo) => {
          <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
