import React from 'react'
import AllInOne from './Components/AllInOne'
import Header from './Components/Header'
// import Calculator from './Components/AllApps/Calculator'
import {IconContext} from 'react-icons'
// import TimeZone from './Components/AllApps/TimeZone'
// import Stopwatch from './Components/AllApps/Stopwatch'
const App = () => {
  return (
    <div>
        <IconContext.Provider value={{color:'royalblue',size:"6rem"}}>
          <Header/>
          <AllInOne/>
          {/* <Calculator/> */}
          {/* <Stopwatch/> */}
          {/* <TimeZone/> */}
        </IconContext.Provider>
    </div>
  )
}

export default App
