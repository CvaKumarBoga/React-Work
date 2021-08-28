import React, { useState } from 'react';
import '../Component/Css/Addition.css';
export default function Addition() {

    const [firstNum,setFirstNum] = useState(0);
    const [secondNum,setSecondNum] = useState(0);
    const [result, setResult] = useState(0);

    const addition = (e) => {
        e.preventDefault();
        setResult(parseInt(firstNum)+parseInt(secondNum));
    }

    return (
        <div className="container">
            <form>
            <h2>Addition of two numbers</h2>
            <label name="firstNum">First Number</label>
            <input type="text" name="firstNum" onChange={(e)=>{setFirstNum(e.target.value)}}/><br/>
            <label name="secondNum">Second Number</label>
            <input type="text" name="secondNum" onChange={(e)=>{setSecondNum(e.target.value)}}/><br/>
            <button onClick={addition}>Add</button>
            <p>{result}</p>
            </form>
        </div>
    )
}
