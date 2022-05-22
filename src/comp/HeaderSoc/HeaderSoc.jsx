import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import './headerSoc.css'

const HeaderSoc = () => {
  return (
    <div className='Tags'>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#know">Know Me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://www.instagram.com/harsh__8133/" target="_blank"><BsInstagram/></a></li>
            <li><a href="https://twitter.com/IronOutlaww" target="_blank"><BsTwitter/></a></li>
            <li><a href="https://www.linkedin.com/in/harsh-varshney-85138a224/" target="_blank"><AiFillLinkedin/></a></li>
        </ul>
    </div>
  )
}

export default HeaderSoc