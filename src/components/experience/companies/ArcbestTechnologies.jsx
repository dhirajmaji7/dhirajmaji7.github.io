import React from "react";

const ArcBestTechnologies = () => {
return (
    <div className="experience__details">
        <div className="experience__details-header">
            <h3>Robotics Engineer, Perception</h3>
            <span className="experience__details-company">
                ArcBest Technologies
            </span>
            <span className="experience__details-separator"> | </span>
            <span className="experience__details-period"> 
                Jun 2023 - Present 
            </span>
        </div>
        <div className='experience__details-points'>
            <ul className="experience__details-description">
                <li>
                    Led the migration of the perception team’s pointcloud processing pipeline from <b>CPU to GPU using CUDA programming</b> on Nvidia
                    Orin, boosting output frequency by 54% from 13 Hz to 20 Hz and reducing CPU utilization by 15%.
                </li>
                <li>
                    Designed a multimodal <b>3D Object Detection</b> pipeline integrating 2D detections from a DETR model and LiDAR data to generate
                    accurate 3D bounding boxes, enhancing object localization for autonomous systems by leveraging sensor fusion techniques.
                </li>
                <li> 
                    Developed an end-to-end <b>Pallet Detection</b> pipeline using YOLOv8 in PyTorch, achieving a MAP of 0.91, by training on a curated dataset of
                    real-world and synthetic data, enhancing object detection accuracy for auto pick and place operations. 
                </li>
                <li>
                    Optimized operational workflows by developing a <b>Lidar-based Freight Dimensioner</b> with 2-inch accuracy, enabling precise
                    measurement of freights, and enhancing navigation and path planning by auto updation of vehicle footprint with freight.
                </li>
                <li>
                    Contributed to the design of an end-to-end <b>Autonomous Barcode Detection</b> pipeline with oriented bounding boxes using YOLOv8, achieving a
                    MAP of 0.89, reducing freight misplacement and enhancing inventory tracking.
                </li>
                <li>
                    Engineered and implemented simulation environments in Nvidia Isaac Sim, streamlining <b>Synthetic data generation</b> and collection
                    workflows for improved efficiency and scalability.
                </li>
            </ul>
        </div>
    </div>
)
}

export default ArcBestTechnologies