import React from 'react'
import Resume from '../../assets/Resume.pdf'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import { SiGooglescholar } from "react-icons/si";

const CallToAction = () => {
  return (
    <div className='action__buttons'>
      <div className='cta'>
        <a href={Resume} download>Download CV</a>
      </div>
      <div className="header__socials">
        <a href='https://www.linkedin.com/in/dhirajmaji7/' target='__blank'><FaLinkedinIn/></a>
        <a href='https://scholar.google.com/citations?user=mw1AFqwAAAAJ&hl=en' target='__blank'><SiGooglescholar/></a>
        <a href='https://github.com/dhirajmaji7' target='__blank'><FiGithub/></a>
      </div>
      <div className='cta'>
        <a href='#contact'>Let's Connect</a>
      </div>
    </div>
  )
}

export default CallToAction