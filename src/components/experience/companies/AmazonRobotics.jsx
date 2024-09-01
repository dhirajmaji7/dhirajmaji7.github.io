import React from "react";

const AmazonRobotics = () => {
return (
    <div className="experience__details">
        <div className="experience__details-header">
            <h3>Advanced Robotics Engineering Intern</h3>
            <span className="experience__details-company">
                Amazon Robotics
            </span>
            <span className="experience__details-separator"> | </span>
            <span className="experience__details-period"> 
                May 2022 - Aug 2022 
            </span>
        </div>
        <div className='experience__details-points'>
            <ul className="experience__details-description">
                <li>
                    Research and Development of joint calibration techniques for single & multi-camera system, using 2D forward projection 
                    and 3D reconstruction.
                </li>
                <li> 
                    Designed a camera calibration algorithm with Trust Region optimization that gives 18 - 23% less error in meter space 
                    as compared to OpenCV. 
                </li>
                <li>
                    Engineered a highly flexible and modular camera calibration pipeline for robotic manipulator work cells, allowing easy
                    customization of feature extraction methods, parameter initialization, optimizers, and non-linear cost functions.
                </li>
            </ul>
        </div>
    </div>
)
}

export default AmazonRobotics