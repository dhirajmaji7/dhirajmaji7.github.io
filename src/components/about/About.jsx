import React, { useRef, useEffect } from 'react';
import './about.css'
import ME from '../../assets/my_photo_3.png'
import {FaAward} from 'react-icons/fa'
import {PiStudentFill} from 'react-icons/pi'
import {GiArchiveResearch} from 'react-icons/gi'

const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return;

    const maxTilt = 15; // degrees
    const handleMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * maxTilt;
      const rotateY = (x - 0.5) * maxTilt;
      node.style.setProperty('--rx', `${rotateX}deg`);
      node.style.setProperty('--ry', `${rotateY}deg`);
    };

    const handleEnter = () => {
      node.style.setProperty("--tiltScale", "1.005");
    };

    const handleLeave = () => {
      node.style.setProperty('--rx', '0deg');
      node.style.setProperty('--ry', '0deg');
      node.style.setProperty("--tiltScale", "1");
    };

    node.addEventListener('pointermove', handleMove);
    node.addEventListener("pointerenter", handleEnter);
    node.addEventListener('pointerleave', handleLeave);

    return () => {
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener("pointerenter", handleEnter);
      node.removeEventListener('pointerleave', handleLeave);
    };
  }, []);
  
  return (
    <section id='about'>
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image" ref={imgRef}>
              <img src={ME} alt='About' />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5 className='card__title'>Experience</h5>
                <p><small>Robotics Perception II</small></p>
                <p><small>Full time : 2 - 3 Years</small></p>
              </article>
              <article className='about__card'>
                <PiStudentFill className='about__icon' />
                <h5 className='card__title'>Education</h5>
                <p><small>Masters in Robotics</small></p>
                <p><small>University of Michigan</small></p>
              </article>
              <article className='about__card'>
                <GiArchiveResearch className='about__icon' />
                <h5 className='card__title'>Publications</h5>
                <p><small>Field : Deep Learning</small></p>
                <p><small>Citations : 220+</small></p>
              </article>
            </div>

            <p className='about__paragraph'>
            Hello! My name is <span>Dhiraj</span>, and I'm a Robotics Software Engineer specializing in 
            Perception, driven by a passion for Computer Vision and Deep Learning. My academic journey 
            led me to a Master's in Robotics from the University of Michigan, Ann Arbor. 
            I currently lead the development of advanced perception algorithms for autonomous forklifts at <span>ArcBest Technologies</span>. 
            My work spans real-time object detection, CUDA-based system parallelization, perception systems
            optimization, and simulation development — all tailored to solving real-world challenges in 
            warehouse automation. 
            </p>
            <p className='about__paragraph'>
            With over 2 years of experience in Robotics and AI, I specialize in developing perception systems 
            that enable robots to navigate complex environments, recognize objects, and make intelligent 
            decisions in real-time. My expertise spans autonomous vehicles, industrial automation, and robotics, 
            with a focus on robust vision algorithms that are both efficient and reliable in challenging operational conditions.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About