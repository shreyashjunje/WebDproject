import "./maincontent_left.css";

function Title() {
  return (
    <div>
      <h2>YOUR FEET</h2>
      <h2>DESERVE</h2>
      <h2>THE BEST</h2>
    </div>
  );
}

function Description() {
  return (
    <span>
      YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR
      FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
    </span>
  );
}

function Btn({font}){
    return (
        <div>
            <button>{font}</button>
        </div>
    )
}

function Handles(){
    return (
        <div>

        </div>
    )
}

function LeftSide(){
    return (
        <div>
            <Title/>
            <Description/>
            <Btn font="Shop now"/>
            <Btn font="Category"/>
        </div>

    )
}

export default LeftSide;