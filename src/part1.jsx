import { useState } from "react";

const History = ({ button }) => {
  if (button.length === 0) {
    return (<>
      <div>Please click buttons to change values</div>
    </>
    )
  }
  return <>
    <div>{button.join(",")}</div>
  </>
}

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  );
}

const Button = (props) => {
  console.log({props});
  const {handleClick, text} = props;
  return (
    <button onClick={handleClick}>{text}</button>
  );
}
const App = () => {
  
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [button, setButton] = useState([]);
  
  
  const handleTop = () => {
    button.push("U");
    setButton(button);
    
    const topTemp = top + 1;
    setTop(topTemp);
  }
  
  const handleBottom = () => {
    button.push("B");
    setButton(button);
    
    const bottomTemp = bottom + 1;
    setBottom(bottomTemp);
  }
  

  return (
    <div>
      <Display counter={top}></Display>
      <Button handleClick={handleTop} text={"top"}></Button>
      <Button handleClick={handleBottom} text={"bottom"}></Button>
      <Display counter={bottom}></Display>
      <br>
      </br>
      {button.length}
      <br>
      </br>
      <History button={button}></History>
    </div>
  );
};

// export default App;