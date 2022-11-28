import React from 'react'
import { useEffect, useState } from 'react'
import './TimeZone.css'

const TimeZone = () => {

  const [timeZone , setTimeZone] = useState('Asia/Kolkata')
  const [time , setTime] = useState(new Date().toLocaleTimeString("en-us",
  {timeZone : timeZone}))

  useEffect(() =>{
    let Interval = setInterval(() =>
          {
          let newTime=new Date().toLocaleTimeString("en-us",
          {timeZone : timeZone})
          setTime(newTime)},1000)
    return ()=>{clearInterval(Interval)}
  },[timeZone])

  let arr = ["Select","Asia/Kolkata", "Europe/London", "America/New_York", "Asia/Tokyo"]

  function options (){
    let opt = [];
    for(let i = 0; i < arr.length; i++){
      opt.push(
        <option value = {arr[i]}>{arr[i]}</option>
      )
    }
    return opt;
  }
  let changehandler=(e)=>{setTimeZone(e.target.value)}


  return (
    <div className='main-container'>
        <div className='title'><h1>Time Zones</h1></div>
        <div className='zones'>
            <select onChange={changehandler}>{options()}</select>
        </div>
        <div className='time'>{time}</div>
    </div>
  )
}

export default TimeZone
