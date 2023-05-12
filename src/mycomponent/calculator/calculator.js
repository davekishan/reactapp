import React from 'react'
import { useEffect, useState } from "react";

export const Calculator
  = () => {
    const [value, setvalue] = useState("")

    const [firstvalue, setfirstvalue] = useState("")

    const [symboll, setsymboll] = useState("")


    const calculate = (e) => {
      e.preventDefault();
      setfirstvalue("");
      setsymboll("");

      if (symboll === '+') {
        setvalue(parseFloat(firstvalue) + parseFloat(value))
      }
      else if (symboll === '-') {
        setvalue(parseFloat(firstvalue) - parseFloat(value))
      }
      else if (symboll === '*') {
        setvalue(parseFloat(firstvalue) * parseFloat(value))
      }
      else if (symboll === '/') {
        setvalue(parseFloat(firstvalue) / parseFloat(value))
      }

    }
    document.addEventListener('keydown', function (event) {
      const key = event.key; // const {key} = event; ES6+
      if (key === "Backspace") {
        console.log("Backspace ")
      }
    });

    const backspace = (e) => {
      const inputval=document.getElementById('input-id')
      if (value) {

        e.preventDefault();    
        inputval.focus();
        inputval.dispatchEvent(new KeyboardEvent('keypress',  {'key':'Backspace'}));
        setvalue(value.slice(0, value.length - 1))
      }

    }

    return (

      <div className='calculator'>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />


        <div>
          {/* <input type='fixed' className="input-button btn-dark" value={firstvalue+symboll}/> */}
          <input type='text' className="input-button btn-dark" id="input-id" value={value} onChange={(e) => setvalue(e.target.value)} />
        </div>

        <div className="btn-group me-2" role="group" aria-label="Large button group">
          <button type="button" className=" list-group-item-action btn btn-dark" onClick={() => { setvalue(""); setfirstvalue(""); setsymboll("") }}>Ac</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={backspace}>	<i className="material-icons">backspace</i></button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => { setfirstvalue(value); setvalue("") }}>%</button>
          <button type="button" className=" list-group-item-action btn btn-dark" onClick={() => { setfirstvalue(value); setvalue(""); setsymboll('/') }}>/</button>
        </div>
        <br />
        <div className="btn-group me-2" aria-label="Large button group">
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '7')}>7</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '8')}>8</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '9')}>9</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => { setfirstvalue(value); setvalue(""); setsymboll('*') }}>x</button>
        </div>
        <br />
        <div className="btn-group me-2" aria-label="Large button group">
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '4')}>4</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '5')}>5</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '6')}>6</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => { setfirstvalue(value); setvalue(""); setsymboll('-') }}>-</button>
        </div>
        <br />
        <div className="btn-group me-2" aria-label="Large button group">
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '1')}>1</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '2')}>2</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '3')}>3</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => { setfirstvalue(value); setvalue(""); setsymboll('+') }}>+</button>
        </div>
        <br />
        <div className="btn-group me-2" aria-label="Large button group">
          <button type="button" className="list-group-item-action-zero btn btn-dark" onClick={() => setvalue(value + '0')}>0</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={() => setvalue(value + '.')} >.</button>
          <button type="button" className="list-group-item-action btn btn-dark" onClick={calculate}>=</button>
        </div>
      </div>
    )
  }
