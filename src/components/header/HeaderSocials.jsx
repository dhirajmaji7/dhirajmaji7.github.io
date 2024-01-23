import React from 'react'
import {FiLinkedin, FiGithub} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dhirajmaji7/' target='__blank' className='socials'><FiLinkedin size={20}/></a>
        <a href='https://www.facebook.com/dhirajmaji7/' target='__blank' className='socials'><FaFacebookF size={20}/></a>
        <a href='https://www.instagram.com/dhirajmaji7/' target='__blank' className='socials'><FiInstagram size={20}/></a>
        <a href='https://github.com/dhirajmaji7' target='__blank' className='socials'><FiGithub size={20}/></a>
    </div>
  )
}

export default HeaderSocials