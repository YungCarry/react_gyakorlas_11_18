import React, {useState} from "react";

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);

    const Szamol = () => {
        switch(operator) {
            case "+":
                setResult(num1 + num2);
                break;
            case "-":
                setResult(num1 - num2);
                break;
            case "*":
                setResult(num1 * num2);
                break;
            case "/":
                setResult(num1 / num2);
                break;
        }
    }

    return (
        <>
            <h1>Számologép</h1>
            <input type="number" value={num1} onChange={e => setNum1(Number(e.target.value))} />
            <select value={operator} onChange={e => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={num2} onChange={e => setNum2(Number(e.target.value))} />
            <button onClick={Szamol}>Számol</button>
            <p>Eredmény: {result}</p>
        </>
    );
}



export default Calculator;