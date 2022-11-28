import React from 'react'
import { homeIcons } from './ReactIcons/Icons'
import Button from './ReUseable/Button'
import './AllInOne.css'

const AllInOne = () => {

  const icons = homeIcons;
  const btnNames = ["Calculator","StopWatch","Convertor","TypeMaster","TimeZone", "TaskRemainder", "HealthCare"]

const iconButtons = () => {
    const array=[]
  for(let i=0;i<btnNames.length;i++)
  {
    array.push(
        <React.Fragment key={i}>
              <div className='pages'>
                <div className='icons'>
                    {icons[i]}
                </div>
                <Button btnName={btnNames[i]}/>
              </div>
        </React.Fragment>
    )
  }
  return array;
}
  return (
    <div className='main'>
      {iconButtons()}
    </div>
    
  )
}

export default AllInOne