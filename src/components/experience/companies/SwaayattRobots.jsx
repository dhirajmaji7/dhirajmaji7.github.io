import React from "react";

const SwaayattRobots = () => {
return (
    <div className="experience__details">
        <div className="experience__details-header">
            <h3>Robotics Intern</h3>
            <span className="experience__details-company">
                Swaayatt Robots
            </span>
            <span className="experience__details-separator"> | </span>
            <span className="experience__details-period"> 
                Apr 2021 - Jun 2021
            </span>
        </div>
        <div className='experience__details-points'>
            <ul className="experience__details-description">
                <li>
                    Developed a software pipeline to convert visual inputs from cameras in Carla Simulator to 
                    Birds-eye view & Occupancy grids, improving data representation.
                </li>
                <li> 
                    Designed a real-time path planning system for autonomous vehicles using the RRT* algorithm as 
                    Local planner and the A* algorithm as the Global planner for enhanced route optimization.
                </li>
                <li>
                    Implemented the Pure Pursuit algorithm for path tracking of Autonomous vehicles for smooth 
                    trajectory following and optimal navigation in diverse environments.
                </li>
            </ul>
        </div>
    </div>
)
}

export default SwaayattRobots