import React from 'react'
import './about.css'
import ME from '../../assets/my_photo_3.png'
import {FaAward} from 'react-icons/fa'
import {PiStudentFill} from 'react-icons/pi'
import {GiArchiveResearch} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='About' />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <p><small>Robotics Software Engineer</small></p>
                <p><small>Full time : 1 - 2 Years</small></p>
                <p><small>Internships : ~ 1 Year</small></p>
              </article>
              <article className='about__card'>
                <PiStudentFill className='about__icon' />
                <h5>Education</h5>
                <p><small>M.Sc. in Robotics</small></p>
                <p><small>University of Michigan</small></p>
                <p><small>Focus : CV, Deep Learning</small></p>
              </article>
              <article className='about__card'>
                <GiArchiveResearch className='about__icon' />
                <h5>Publications</h5>
                <p><small>1 Journal Paper</small></p>
                <p><small>Field : Deep Learning</small></p>
                <p><small>Citations : 150+</small></p>
              </article>
            </div>

            <p className='about__paragraph'>
            Hello! My name is <span>Dhiraj</span>, and I'm a Robotics Software Engineer specializing in 
            Perception, driven by a passion for Computer Vision and Deep Learning. My academic journey 
            led me to a Master's in Robotics from the University of Michigan with a focus in Deep Learning. 
            Currently, I lead the development of advanced perception algorithms for autonomous forklifts at 
            ArcBest Technologies, where I work on development of object detection pipelines, perception 
            system optimization, system parallelization using CUDA, and simulation environments. My work in Deep Learning 
            have been recognized with a publication in Biomedical Signal Processing and Control journal, 
            adding to the growing body of knowledge in the field. I am excited to explore how AI and Robotics 
            can transform industries and drive impactful solutions. Let's connect and push the boundaries of 
            technology together!
            </p>
        </div>
      </div>
    </section>
  )
}

export default About