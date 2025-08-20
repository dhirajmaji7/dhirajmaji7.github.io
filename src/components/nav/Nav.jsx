import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { PiBookOpenText } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} 
          className={activeNav === '#' ? 'active' : ''}>
          <span className='icon'><AiOutlineHome/></span> 
          <span className='text'>Home</span>
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} 
          className={activeNav === '#about' ? 'active' : ''}>
          <span className='icon'><AiOutlineUser/></span>
          <span className='text'>About</span>
      </a>
      <a href='#education' onClick={() => setActiveNav('#education')} 
          className={activeNav === '#education' ? 'active' : ''}>
          <span className='icon'><PiBookOpenText/></span>
          <span className='text'>Education</span>
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}>
          <span className='icon'><MdWorkOutline/></span>
          <span className='text'>Experience</span>
      </a>
      <a href='#projects' onClick={() => setActiveNav('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}>
          <span className='icon'><GoGear/></span>
          <span className='text'>Projects</span>
      </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}>
          <span className='icon'><BiMessageDetail/></span>
          <span className='text'>Contact</span>
      </a>
      <div className="indicator"></div>
    </nav>
    
  )
}

export default Nav