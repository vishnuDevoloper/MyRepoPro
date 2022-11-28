import React from 'react'
import Button from '../ReUseable/Button'
import './Stopwatch.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Stopwatch = () => {
  const [milliseconds , setMilliseconds] = useState(0)
  const [seconds , setSeconds] = useState(0)
  const [minutes , setMinutes] = useState(0)
  const [hours , setHours] = useState(0)
  
  const [intervalId , setIntervalId] = useState(null)

  useEffect(()=>{
    if(milliseconds === 1000){
      setSeconds((prev)=>prev+1)
      setMilliseconds(0)
    }
    if(seconds === 60){
      setMinutes((prev)=>prev+1)
      setSeconds(0)
    }
    if(minutes === 59){
      setHours((prev)=>prev+1)
      setMinutes(0)
    }
  },[milliseconds === 1000])

  const startTime = (e) =>{

    if(intervalId === null){
      let timer= setInterval(()=>{
        setMilliseconds((prev)=>prev+10)
      },10)
  setIntervalId(timer);
    }
  }

  const stopTime = () =>{
    clearInterval(intervalId)
    setIntervalId(null)
  }

  const resetTime = ()=>{
    setMilliseconds(0)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  
  }

  return (
    <div className='stopwatch'>
      <div className='main-section'>
        <div className='display'><h1>{hours} : {minutes} : {seconds} : {milliseconds}</h1></div>
        <div className='btn-container'>
          <Button btnName={"Start"} onClick={startTime}/>
          <Button btnName={"Reset"} onClick={resetTime}/>
          <Button btnName={"Stop"} onClick={stopTime}/>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch

