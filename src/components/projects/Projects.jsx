import React from 'react'
import './projects.css'
import ARUGD_img from '../../assets/arugd.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id='projects'>
      <h4>Some Things I've Built</h4>
      <h2>Projects</h2>

      <div className="container projects__container">
        <div className="featured__project">
          <article className='featured__project-item'>
            <div className="featured__project-header">
              <h4>Featured Project</h4>
            </div>
            <div className="featured__project-details">
              <div className="featured__project-content">
                <div className="featured__project-header">
                  <a href='https://www.sciencedirect.com/science/article/abs/pii/S1746809421006741?via%3Dihub' target='__blank'>
                    <span className='featured__project-header-title'>Attention Res-Unet with Guided Decoder</span>
                    <span className='icon'><FaExternalLinkAlt/></span>
                  </a>
                </div>
                <ul className='project__content-points'>
                  <li>Designed a novel Guided Decoder technique to explicitly supervise the learning process of each decoder layer.</li>
                  <li>Devised an end-to-end Deep Learning architecture combining Res-UNet and Attention gates along with the Guided Decoder technique showing significant increase in performance based on statistical analysis done with 0.05 p-value.</li>
                  <li>Designed a weighted guided loss which improves prediction capabilities of each layer of the decoder.</li>
                  <li>Published in the Biomedical Signal Processing and Control journal in 2022.</li>
                </ul>
                <div className="featured__project-footer">
                  <span>Deep Learning</span>
                  <span>Biomedical Imaging</span>
                  <span>Semantic Segmentation</span>
                </div>
              </div>
              <div className="featured__project-img">
                <img src={ARUGD_img} alt='ARU-GD' />
              </div>
            </div>
          </article>
        </div>

        <div className="other__projects">
          <article className='project__item'>
            <h3 className='project-header'>Super Resolution GANs</h3>
            <ul className='project-content'>
              <li>Implemented a Generative Adversarial Network (GAN) to convert low resolution images to high resolution on Set5 and DIV-2k dataset.</li>
              <li>Devised a custom loss with MSE, Adversarial loss and Perceptual loss to obtain better PSNR of 23.84 as compared to bicubic interpolation.</li>
            </ul>
            <div className="project-footer">
              <span>Deep Learning</span>
              <span>Generative Models</span>
            </div>
          </article>

          <article className='project__item'>
            <h3 className='project-header'>Autonomous Navigation of Mobile robots</h3>
            <ul className='project-content'>
              <li>Developed a Simultaneous Localization and Mapping (SLAM) algorithm for Mobile robot to create a map of its environment and localize its position using particle filters.</li>
              <li>Implemented the A* algorithm for path planning and designed an algorithm for autonomous exploration of an unknown environment.</li>
            </ul>
            <div className="project-footer">
              <span>SLAM</span>
              <span>Path Planning</span>
            </div>
          </article>

          <article className='project__item'>
            <h3 className='project-header'>Meta-Learning Conservation Laws for End-to-End Molecular Dynamics Simulation</h3>
            <ul className='project-content'>
              <li>Developed a Deep Learning architecture for prediction of position and velocity of the next state for 10,000 particles in a system using the dual-loop Meta-Learning-based approach.</li>
              <li>Designed the inner loop with unsupervised loss function to encode conservation laws of physics as inductive bias and a supervised outer loop to predict the next states of the particles.</li>
              <li>Achieved 85x speed boost compared to traditional MD simulations</li>
            </ul>
            <div className="project-footer">
              <span>Meta-Learning</span>
              <span>Deep Learning</span>
            </div>
          </article>

          <article className='project__item'>
            <h3 className='project-header'>Autonomous Robotic Manipulator</h3>
            <ul className='project-content'>
              <li>Designed an algorithm to detect the position, orientation, and color of multiple blocks of varied dimensions in the workspace using RGB-D cameras.</li>
              <li>Achieved a color detection accuracy of 98%, and a position and orientation accuracy of around 90% in a well lit environment.</li>
              <li>Developed a kinematics model for a 5R manipulator for autonomous navigation in the workspace and performing pick and place, and stacking operations.</li>
            </ul>
            <div className="project-footer">
              <span>Computer Vision</span>
              <span>Robot Kinematics</span>
            </div>
          </article>

          <article className='project__item'>
            <h3 className='project-header'>Event Camera based Stereo Depth Estimation</h3>
            <ul className='project-content'>
              <li>Developed an algorithm for stereo depth estimation from Event cameras which have higher dynamic range, high frame rate, and lower latency as compared to conventional cameras.</li>
              <li>Designed a pipeline to back-project events from different viewpoints as 3D rays through a voxel grid.</li>
              <li>Implemented a ray-density based thresholding through each voxel to create a local depth map for each viewpoint, and the depth maps from multiple viewpoints are merged to create the final point cloud.</li>
            </ul>
            <div className="project-footer">
              <span>Computer Vision</span>
              <span>Depth Estimation</span>
            </div>
          </article>

          <article className='project__item'>
            <h3 className='project-header'>Vehicle Detection on Kitti dataset</h3>
            <ul className='project-content'>
              <li>Implemented Deep Learning models of Res-Net, Dense-Net and VGG-Net using PyTorch framework on the Kitti dataset for vehicle detection.</li>
              <li>Compared the performance of our modified Res-Net against other architectures on the image classification task.</li>
            </ul>
            <div className="project-footer">
              <span>Deep Learning</span>
              <span>Object Detection</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Projects