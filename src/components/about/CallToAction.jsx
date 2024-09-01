import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={Resume} download>Download CV</a>
        <a href='#contact'>Let's Connect</a>
    </div>
  )
}

export default CallToAction