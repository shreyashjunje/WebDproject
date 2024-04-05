import data from "./data.js";
import "./App.css";
import Tours from "./components/Tours.jsx";
import { useState } from "react";

function App() {
  const [tours, settours] = useState(data);

  function removetour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  }

  if(tours.length===0){
    return(
      <div>
        <h3>No tours left</h3>
        <button onClick={()=>settours(data)}>Refresh </button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  );
}

export default App;




