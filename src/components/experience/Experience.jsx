import React from 'react'
import { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './experience.css'
import ArcBestTechnologies from './companies/ArcbestTechnologies'
import AmazonRobotics from './companies/AmazonRobotics'
import SwaayattRobots from './companies/SwaayattRobots'
import logo_arcbest from '../../assets/logo_arcbest.png'
import logo_amazon_robotics from '../../assets/logo_amazon_robotics.png'
import logo_swaayatt_robots from '../../assets/logo_swaayatt_robots.png'
 
const Experience = () => {

  const [activeCard, setActiveCard] = useState('');
  
  return (
    <section id='experience'>
      <h4>Where I've Worked</h4>
      <h2>Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__cards">
          <div className={activeCard === 'arcbest' ? 'experience__card-active' : 'experience__card'}>
            <a href='#experience/1' onClick={() => setActiveCard('arcbest')}>
              <div className="experience__card-logo">
                <img src={logo_arcbest} alt='Company Logo'/>
              </div>
              <span className='experience__card-title'>ArcBest Technologies</span>
            </a>
          </div>
          <div className={activeCard === 'amazon_robotics' ? 'experience__card-active' : 'experience__card'}>
            <a href='#experience/2' onClick={() => setActiveCard('amazon_robotics')}>
              <div className="experience__card-logo">
                <img src={logo_amazon_robotics} alt='Company Logo'/>
              </div>
              <span className='experience__card-title'>Amazon Robotics</span>
            </a>
          </div>
          <div className={activeCard === 'swaayatt_robots' ? 'experience__card-active' : 'experience__card'}>
            <a href='#experience/3' onClick={() => setActiveCard('swaayatt_robots')}>
              <div className="experience__card-logo">
                <img src={logo_swaayatt_robots} alt='Company Logo'/>
              </div>
              <span className='experience__card-title'>Swaayatt Robots</span>
            </a>
          </div>
        </div>
        <div className="experience__body">
          <HashRouter>
            <div className='experience__pages'>
              <Routes>
                <Route path="experience/1" element={<ArcBestTechnologies />} />
                <Route path="experience/2" element={<AmazonRobotics />} />
                <Route path="experience/3" element={<SwaayattRobots />} />
              </Routes>
            </div>
          </HashRouter>
        </div>
      </div>
    </section>
  )
}

export default Experience