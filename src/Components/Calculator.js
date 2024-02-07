import { useState } from 'react';

function App() {
    const [values, setValues] = useState("");

    // const handleClick = (e) => {
    //     setValues(values.concat(e.target.value));
    // }

    const handleClick = (e) => {
        const input = e.target.value;
        const operants = ["+", "-", "/", "*", "."]

        if ((operants.includes(input)) &&
            (values.endsWith("+") || values.endsWith("-") || values.endsWith("*") || values.endsWith("/") || values === "" || values.endsWith("."))
        ) {
            return;
        }

        setValues(values.concat(input));
    }

    const clearInput = () => {
        setValues("");
    }
    const backSpace = () => {
        setValues(values.slice(0, -1));
    }
    const evaluateResult = () => {
        setValues(eval(values).toString());
    }
    return (
        <div className='calculator'>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Calculator</a>
                </div>
            </nav><br />
            <div >
                <form className='calculator__output'>
                    <input class="form-control" type="text" value={values} aria-label="readonly input example" readonly></input>
                </form>
                <div className='calculator__keys'>
                    <button value="7" className='calculator__key' onClick={handleClick}>7</button>
                    <button value="8" className='calculator__key' onClick={handleClick}>8</button>
                    <button value="9" className='calculator__key' onClick={handleClick}>9</button>
                    <button onClick={clearInput} className='calculator__key calculator__key--operator'>C</button>

                    <button value="4" className='calculator__key' onClick={handleClick}>4</button>
                    <button value="5" className='calculator__key' onClick={handleClick}>5</button>
                    <button value="6" className='calculator__key' onClick={handleClick}>6</button>

                    <button value="1" className='calculator__key' onClick={handleClick}>1</button>
                    <button value="2" className='calculator__key' onClick={handleClick}>2</button>
                    <button value="3" className='calculator__key' onClick={handleClick}>3</button>

                    <button value="." className="calculator__key calculator__key--operator" onClick={handleClick}>.</button>
                    <button value="0" className='calculator__key' onClick={handleClick}>0</button>
                    <button onClick={backSpace} className='calculator__key--operator' >🔙</button>

                    <button value="+" className="calculator__key calculator__key--operator" onClick={handleClick}>+</button>
                    <button value="-" className="calculator__key calculator__key--operator" onClick={handleClick}>-</button>
                    <button value="*" className="calculator__key calculator__key--operator" onClick={handleClick}>*</button>
                    <button value="/" className="calculator__key calculator__key--operator" onClick={handleClick}>/</button>
                    <button onClick={evaluateResult} className='calculator__key calculator__key--enter' >=</button>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default App;











// if (input === "." && values.includes(".")) {
//     // If the input is a decimal point and it's already included in the value
//     return;
// } else if (
//     (input === "+" || input === "-" || input === "*" || input === "/") &&
//     values.endsWith(".") // Check if the last character is a decimal point
// ) {
//     // If the input is an operator and the last character of the value is a decimal point
//     return;
// } else if (
//     (input === "+" || input === "-" || input === "*" || input === "/") &&
//     (values.endsWith("+") || values.endsWith("-") || values.endsWith("*") || values.endsWith("/") || values === "")
// ) {
//     // If the input is an operator and the last character of the value is also an operator or the value is empty
//     return;
// }