import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { setData } from "./redux/calc/calc.actions";
import Buttons from "./components/buttons/buttons.component";

const App = ({ data, setData }) => {
  console.log(data);

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));

    e.preventDefault();
    const newData = e.target["calcInput"].value;
    console.log(newData);
    setData(newData);
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
        <input type="text" defaultValue={result} name="calcInput" onChange={handleClick} />
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

const mapStateToProps = (state) => ({
  data: state.calc.data,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (result) => dispatch(setData(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
