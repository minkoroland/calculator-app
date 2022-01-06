import React, { useState } from "react";
//import {add, substract, multiply, divide, equals, clear } from "./redux/calc/calc.actions";
//import {connect} from "react-redux";
import "./App.css";
import Buttons from "./components/buttons/buttons.component";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  // logika: speciális jeleknél széttöröm a stringet; switch-csel logikát adok neki

  // add, substract, multiply, divide 
  const equals = () => {
    setResult(eval(result));
  }

  // clear
  const clear = () => {
    setResult("");
  }

  // backspace
  const backspace = () => {
    setResult(result.slice(0, -1));
  };


  return (
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <Buttons handleClick={handleClick} equals={equals} clear={clear} backspace={backspace}></Buttons>
      </div>
  );
};
/*
const mapDispatchToProps = (dispatch) => ({
  //handleClick: (item) => dispatch(handleClick(item)),
  add: (item) => dispatch(add(item)),
  substract: (item) => dispatch(substract(item)),
  multiply: (item) => dispatch(multiply(item)),
  divide: (item) => dispatch(divide(item)),
  equals: (item) => dispatch(equals(item)),
  clear: (item) => dispatch(clear(item)),
});

export default connect(null, mapDispatchToProps)(App);
*/
export default App;
