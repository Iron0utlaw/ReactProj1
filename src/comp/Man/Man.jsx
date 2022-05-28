import React from 'react'
import './man.css'
import me from '../../assests/IMG_4015.JPG'

const Man = () => {
  return (
    <div className='Man'>
      <img src={me} alt="" />
      <div id="h3">That's Me</div>
    </div>
  )
}

export default Man