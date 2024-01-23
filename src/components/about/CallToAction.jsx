import React from 'react'
import CV from '../../assets/CV.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href='#contact'>Let's Connect</a>
    </div>
  )
}

export default CallToAction