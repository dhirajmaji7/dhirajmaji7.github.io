import React from 'react'
import {FiLinkedin, FiGithub} from 'react-icons/fi'
import { SiGooglescholar } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dhirajmaji7/' target='__blank' className='socials'><FiLinkedin size={20}/></a>
        <a href='https://scholar.google.com/citations?user=mw1AFqwAAAAJ&hl=en' target='__blank' className='socials'><SiGooglescholar size={20}/></a>
        <a href='https://github.com/dhirajmaji7' target='__blank' className='socials'><FiGithub size={20}/></a>
    </div>
  )
}

export default HeaderSocials