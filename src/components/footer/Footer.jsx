import React from 'react'
import './footer.css'
import Resume from '../../assets/Resume.pdf'
import {FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'


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
        <a href='https://www.facebook.com/dhirajmaji7/' target='__blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/dhirajmaji7/' target='__blank'><GrInstagram/></a>
        <a href='https://www.linkedin.com/in/dhirajmaji7/' target='__blank'><FaLinkedinIn/></a>
        <a href='https://github.com/dhirajmaji7' target='__blank'><FiGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2023 Dhiraj Maji. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer