import "./buttons.styles.css";

const Buttons = ({handleClick, equals, clear, backspace}) => {
const digits = ["+", "7", "8", "9", "-", "4", "5", "6", "*", "1", "2", "3", "/", "0", "."];

  return (
    <div className="keypad">
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
        {
            digits.map((digit, index) =>(
                <button key={index} name={digit} onClick={handleClick}>{digit}</button>
            ))
        }
        <button name="=" onClick={equals}>=</button>
    </div>
  );
};

export default Buttons;