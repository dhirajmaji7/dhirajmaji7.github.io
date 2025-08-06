import React from 'react'
import './footer.css'
import Resume from '../../assets/Resume.pdf'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import { SiGooglescholar } from "react-icons/si";


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DHIRAJ MAJI</a>

      <ul className='footer__links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__CV">
        <a href={Resume} download>Download CV</a>
      </div>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/dhirajmaji7/' target='__blank'><FaLinkedinIn/></a>
        <a href='https://scholar.google.com/citations?user=mw1AFqwAAAAJ&hl=en' target='__blank'><SiGooglescholar/></a>
        <a href='https://github.com/dhirajmaji7' target='__blank'><FiGithub/></a>
      </div>
    </footer>
  )
}

export default Footer