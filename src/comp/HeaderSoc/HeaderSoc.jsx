import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import './headerSoc.css'

const HeaderSoc = () => {
  const clickf = () => {
    console.log("Mardunga")
  }

  return (
    <div className='Tags'>
        <ul>
            <li><a href="#home" onClick={clickf}>Home</a></li>
            <li><a href="#know" onClick={clickf}>Know Me</a></li>
            <li><a href="#contact" onClick={clickf}>Contact</a></li>
            <li><a href="https://www.instagram.com/harsh__8133/" target="_blank" onClick={clickf}><BsInstagram/></a></li>
            <li><a href="https://twitter.com/IronOutlaww" target="_blank" onClick={clickf}><BsTwitter/></a></li>
            <li><a href="https://www.linkedin.com/in/harsh-varshney-85138a224/" target="_blank" onClick={clickf}><AiFillLinkedin/></a></li>
        </ul>
    </div>
  )
}

export default HeaderSoc