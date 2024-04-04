
import './App.css';
import Navbar from "./components/navBar.jsx";
import LeftSide from "./components/maincontent_left.jsx";
import RightSide from './components/maincontent_right.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <LeftSide/>
        <RightSide/>
      </div>
    </div>
  )
    
  
}

export default App;
