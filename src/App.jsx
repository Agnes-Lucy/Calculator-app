import { useState } from "react";
import './App.css'


function App() {
  const [calc, setCal] = useState("");
  const [result, setResult] = useState ("")
  
  const ops =  ['/', '*', '+', '-', '.']

  const updateCalc = value =>{
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes (calc.slice(-1)
      )
    ) {
      return;
    }

    setCal (calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
        key={i}>
          {i}
        </button>
      )
    }
    return digits
  }

  const Calculate = () => {
    setCal(eval(calc).toString ());
  }

  const delLast = () => {
    if (calc == '') {
      return
    }

    const value = calc.slice(0, -1);
    setCal(value);
  }
 
  return (
    <>
      <div className="App">
        <div  className="calculator">
          <div className="display">
          {result ? <span>({result})</span>:""} &nbsp; {calc || "0"}
          </div>
          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={delLast}>DEL</button>
          </div>
          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={Calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
