const ExperienceData = [
  {
    companyName: "ArcBest Technologies",
    role: "Robotics Engineer, Perception II",
    period: "Jun 2023 - Present",
    logoKey: "arcbest",
    link: "https://arcb.com/technology/vaux",
    description: [
      `Led the migration of the perception team’s pointcloud processing pipeline from <b class="highlight">CPU to GPU using CUDA programming</b> on Nvidia Orin, boosting output frequency by 54% from 13 Hz to 20 Hz and reducing CPU utilization by 15%.`,
      `Designed a multimodal <b class="highlight">3D Object Detection</b> pipeline integrating 2D detections from a DETR model and LiDAR data to generate accurate 3D bounding boxes, enhancing object localization for autonomous systems by leveraging sensor fusion techniques.`,
      `Developed an end-to-end <b class="highlight">Pallet Detection</b> pipeline using YOLOv8 in PyTorch, achieving a MAP of 0.91, by training on a curated dataset of real-world and synthetic data, enhancing object detection accuracy for auto pick and place operations.`,
      `Optimized operational workflows by developing a <b class="highlight">Lidar-based Freight Dimensioner</b> with 2-inch accuracy, enabling precise measurement of freights, and enhancing navigation and path planning by auto updation of vehicle footprint with freight.`,
      `Engineered and implemented simulation environments in Nvidia Isaac Sim, streamlining <b class="highlight">Synthetic data generation</b> and collection workflows for improved efficiency and scalability.`
    ]
  },
  {
    companyName: "Amazon Robotics",
    role: "Advanced Robotics Intern",
    period: "May 2022 - Aug 2022",
    logoKey: "amazon_robotics",
    link: "https://www.aboutamazon.com/news/operations/amazon-robotics-headquarters-tour-westborough-massachusetts",
    description: [
      `Research and Development of joint calibration techniques for single & multi-camera system, using 2D forward projection and 3D reconstruction.`,
      `Designed a <b class="highlight">camera calibration</b> algorithm with Trust Region optimization that gives 18 - 23% less error in meter space as compared to OpenCV.`,
      `Engineered a highly flexible and modular camera calibration pipeline for robotic manipulator work cells, allowing easy customization of feature extraction methods, parameter initialization, optimizers, and non-linear cost functions.`
    ]
  },
  {
    companyName: "Swaayatt Robots",
    role: "Robotics Intern",
    period: "Apr 2021 - Jun 2021",
    logoKey: "swaayatt_robots",
    link: "https://www.swaayattrobots.com/",
    description: [
      `Developed a software pipeline to convert visual inputs from cameras in Carla Simulator to Birds-eye view & Occupancy grids, improving data representation.`,
      `Designed a <b class="highlight">real-time path planning</b> system for autonomous vehicles using the RRT* algorithm as Local planner and the A* algorithm as the Global planner for enhanced route optimization.`,
      `Implemented the Pure Pursuit algorithm for <b class="highlight">path tracking</b> of Autonomous vehicles for smooth trajectory following and optimal navigation in diverse environments.`
    ]
  }
];

export default ExperienceData;