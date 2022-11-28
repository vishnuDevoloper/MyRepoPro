import React from 'react'
import { useState } from 'react'
import Button from '../ReUseable/Button'
import "./Calculator.css"

const Calculator = () => {

    const [value , setValue] = useState('')
    const [ans , setAns] = useState("")

    const val = [7, 8, 9, "+", "C", 4, 5, 6, "-", "AC", 1, 2, 3, "*", "Ans", ".", "0", "00", "/", "="];

    const calcultion = () =>{
        let btns = []
        for(let i = 0; i < val.length; i++){
            btns.push(<Button btnName={val[i]}/>)
        }
        return btns;
    }

    const clickHandler = (e) =>{
      let val = e.target.innerText;
      if(val === "C"){
        setValue(value.slice(0,value.length-1))
      }
      else if(val === "AC"){
        setValue("")
        setAns("")
      }
      else if(val === "="){
        setAns(eval(value))
        setValue("")
      }
      else if(val === "Ans"){
        setValue(String(ans))
        setAns("")
      }
      else{
        setValue((prev)=>prev + val)
      }
    }

  return (
    <div className='main-container'>
        <h1>Calculator</h1> <hr/>
        <div className='answer'><h3>Ans:{ans}</h3></div>

        <div className='input'>{value}</div>

        <div onClick={clickHandler} className='button-container'>{calcultion()}</div>
    </div>
  )
}

export default Calculator
