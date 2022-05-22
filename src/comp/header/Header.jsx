import React from 'react'
import './header.css'
import Content from '../Content/Content'
import HeaderSoc from '../HeaderSoc/HeaderSoc'

const Header = () => {
  return (
    <div className='Head' id='home'>
        <HeaderSoc/>
        <Content/>
    </div>
  )
}

export default Header