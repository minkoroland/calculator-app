import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/buttons/buttons.component";

const App = ({ setCurrentSolution }) => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(result);

    setCurrentSolution(result);
  };

  // logika: speciális jeleknél széttöröm a stringet; switch-csel logikát adok neki
  // add, substract, multiply, divide
  const equals = () => {
    setResult(eval(result));
  };

  // clear
  const clear = () => {
    setResult("");
  };

  // backspace
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  /*
  changeText(event){
    this.setState(
        {textValue : event.target.value}
    );
*/

  return (
    <div className="container">
      <form>
        <input
          type="text"
          value={result}
          onChange={(e) => this.handleChange(e)}
        />
      </form>
      <Buttons
        handleClick={handleClick}
        equals={equals}
        clear={clear}
        backspace={backspace}
      ></Buttons>
    </div>
  );
};


export default App;
