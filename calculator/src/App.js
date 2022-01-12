import "./App.css";
import { connect } from "react-redux";
import { setData } from "./redux/calc/calc.actions";
import Buttons from "./components/buttons/buttons.component";

const App = ({ data, setData }) => {
  
  const handleChange = (e) => {
    const newData = e.target.value;
    setData(newData);
  };

  const handleClick = (e) => {
    setData(data.concat(e.target.name));
  };

  const equals = () => {
    setData(eval(data));
  };

  // clear
  const clear = () => {
    setData("");
  };

  // backspace
  const backspace = (e) => {
    setData(data.slice(0, -1)) || setData("");
  };

  return (
    <div className="container">
      <form>
        <input value={data} name="calcInput" onChange={handleChange} />
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

//<input type="text" defaultValue={data} name="calcInput" />
