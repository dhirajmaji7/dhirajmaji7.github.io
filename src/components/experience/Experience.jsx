import React from 'react'
import { useState } from 'react';
import './experience.css'
import logo_1 from '../../assets/logo_arcbest.png'
import logo_2 from '../../assets/logo_amazon_robotics.png'
import logo_3 from '../../assets/logo_swaayatt_robots.png'
import logo_4 from '../../assets/logo_forbes_marshall.png'
 
const Experience = () => {
  const experience__content = [
    {
      title: "Robotics Engineer, Perception I",
      company: "ArcBest Technologies",
      duration: "Jun 2023 - Present",
      logo: logo_1,
      description:[
        "Research and development of advanced algorithms for the perception of warehouse environment for autonomous forklifts.",
        "Development and testing of perception software in simulation environment as well as forklift hardware.",
        "Design of sensor suites for various tasks and features to meet customer requirements.",
        "Development of software for innovative and critical features in perception, and taking it to production.",
      ],
    },
    {
      title: "Advanced Robotics Engineering Intern",
      company: "Amazon Robotics",
      duration: "May 2022 - Aug 2022",
      logo: logo_2,
      description:[
        "Research and Development of joint calibration techniques for single & multi-camera system, using 2D forward projection and 3D reconstruction.",
        "Designed a camera calibration algorithm that gives 18 - 23% less error in meter space as compared to OpenCV.",
        "Developed a camera calibration pipeline for robotic work cells providing flexibility, modularity and ease of customization of feature extraction method, parameter initialization process, optimizer, and non-linear cost function.",
      ],
    },
    {
      title: "Research Intern - Path Planning",
      company: "Swaayatt Robots",
      duration: "Apr 2021 - Jun 2021",
      logo: logo_3,
      description:[
        "Developed a software pipeline to convert visual inputs from cameras in Carla Simulator to Birds-eye view & Occupancy grids.",
        "Designed a real-time path planning system for autonomous vehicles using the RRT* algorithm as Local planner and the A* algorithm as the Global planner.",
        "Implemented the Pure Pursuit algorithm for path tracking of Autonomous vehicles for smooth trajectory following.",
      ],
    },
    {
      title: "Software Intern",
      company: "Forbes Marshall",
      duration: "May 2019 - Jun 2019",
      logo: logo_4,
      description:[
        "Primarily responsible for the programming of a Graphic User Interface and its workflow planning for on-site calibration and testing of a Microwave moisture sensor.",
        "Designed a GUI using Tkinter library in python according to customer requirements including crucial features like data logging, warning signals, auto and manual calibration options, and graphical displays showing trends in the data.",
      ],
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };
  
  return (
    <section id='experience'>
      <h4>Where I've Worked</h4>
      <h2>Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__cards">
          {experience__content.map((exp, index) => (
            <div
              key={index}
              className={`experience__card ${
                activeCard === index ? "selected" : ""}`}
              onClick={() => handleCardClick(index)}
            > 
              <div className="experience__card-logo">
                <img src={exp.logo} alt='Company Logo'/>
              </div>
              <div className="experience__card-tag">
                <p>{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experience__details-section">
        {activeCard !== null && (
          <div className="experience__details">
            <div className="experience__details-header">
              <h3>{experience__content[activeCard].title}</h3>
              <p className="experience__details-company">
                {experience__content[activeCard].company} | {experience__content[activeCard].duration}
              </p>
            </div>
            <ul className="experience__details-description">
            {experience__content[activeCard].description.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

export default Experience