import ARUGD_img from '../../assets/arugd.jpg';

// ===== Featured Projects ====
export const featuredProjects = [
  {
    id: 'arugd',
    title: 'Attention Res-Unet with Guided Decoder',
    image: ARUGD_img,
    orientation: 'left', // 'left' → Image | Content, 'right' → Content | Image
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S1746809421006741?via%3Dihub',
    bullets: [
      'Designed a novel Guided Decoder technique to explicitly supervise the learning process of each decoder layer.',
      'Devised an end-to-end Deep Learning architecture combining Res-UNet and Attention gates with the Guided Decoder technique, showing significant performance gains.',
      'Designed a weighted guided loss to improve prediction at each decoder layer.',
      'Published in the Biomedical Signal Processing and Control (2022) journal.',
    ],
    tags: ['Deep Learning', 'Semantic Segmentation', 'Biomedical Imaging'],
  },
];

// ===== Other Projects =====
export const otherProjects = [
  {
    id: 'sr-gans',
    title: 'Super Resolution GANs',
    bullets: [
      'Implemented a Generative Adversarial Network (GAN) to upsample low-resolution images on Set5 and DIV2K datasets.',
      'Designed a custom loss with MSE, Adversarial loss and Perceptual loss achieving PSNR of 23.84 vs bicubic interpolation baseline.',
    ],
    tags: ['Generative Models', 'Deep Learning'],
  },
  {
    id: 'mobile-robot-slam',
    title: 'Autonomous Navigation of Mobile robots',
    bullets: [
      'Developed a Simultaneous Localization and Mapping (SLAM) algorithm for a mobile robot to create a map of its environment and localize its position using particle filters.',
      'Implemented A* path planning algorithm and autonomous exploration of an unknown environment.',
    ],
    tags: ['SLAM', 'Path Planning'],
  },
  {
    id: 'meta-md',
    title: 'Meta-Learning for End-to-End Molecular Dynamics Simulation',
    bullets: [
      'Developed a Deep Learning architecture for prediction of position and velocity states for 10,000 particles in a molecular system using dual-loop Meta-Learning-based approach.',
      'Designed the inner loop with unsupervised loss function to encode conservation laws of physics as inductive bias and a outer loop to supervise prediction of the next states of the particles.',
      'Achieved 85x speed boost compared to traditional Molecular Dynamic simulations.',
    ],
    tags: ['Meta-Learning', 'Deep Learning'],
  },
  {
    id: 'manipulator',
    title: 'Autonomous Pick and Place with Robotic Manipulator',
    bullets: [
      'Designed an algorithm for pose and color detection of blocks of varied dimensions using RGB-D cameras.',
      'Achieved a color detection accuracy of 98%, and a pose accuracy of 90% in a well lit environment',
      'Developed the kinematics model for a 5R manipulator for autonomous pick and place, and stacking operations.',
    ],
    tags: ['Computer Vision', 'Robot Kinematics'],
  },
  {
    id: 'vehicle-detection',
    title: 'Vehicle Detection on Kitti dataset',
    bullets: [
      'Designed a real-time object detection pipeline using YOLOv8 on the KITTI dataset, achieving 85.6% mAP@0.5 across cars, pedestrians, and cyclists.',
      'Optimized model inference with TensorRT Engine, reducing latency to 35 ms per frame (~30 FPS) for autonomous driving applications.',
    ],
    tags: ['Object Detection', 'Inference Optimization'],
  },
  {
    id: 'event-stereo',
    title: 'Event Camera based Stereo Depth Estimation',
    bullets: [
      'Designed a stereo depth estimation algorithm by back-projecting events from different viewpoints as 3D rays through a voxel grid.',
      'Implemented a ray-density based thresholding through each voxel to create local depth maps for each viewpoint, and the depth maps from multiple viewpoints are fused to create the final point cloud.',
    ],
    tags: ['Stereo Depth Estimation', 'Computer Vision'],
  }
];