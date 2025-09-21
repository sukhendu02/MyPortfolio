export const projects = [
  {
    id: 1,
    title: 'VendorHub',
    description: [
      'Built a complete vendor-side utility app enabling marketplace vendorsto register, get verified, and manage all operations including profilemanagement, document uploads — all from a single dashboard.',
      'Developed a secure vendor onboarding platform with real-timedocument preview, validation, and S3 integration.',
      'Implemented modular backend with authentication, role-based accesscontrol, and audit logging.',
'Enhanced performance and UX by introducing lazy loading, field-levelvalidation, and file type handling.'
    ],
    image: 'https://i.ibb.co/Y4452XVb/Screenshot-2025-09-21-024421.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    liveUrl: 'https://aabhaarindia.com',
    githubUrl: 'https://github.com/sukhendu02/VendorsHub',
    featured: true,
    type: ['fullstack','Hosted'],
    year: 2025
  },
  {
    id: 2,
    title: 'SmartHire AI',
    description: [
      'Empower companies to manage hiring – Companies can create and manage job posts, contact candidates, reject or hire applicants, and track all recruitment activities under a single account. Multiple HR members can collaborate and manage postings seamlessly.',
      'Automate resume-job matching – AI analyzes resumes against job descriptions and generates a match score. Only candidates with a 70% or higher score can apply, ensuring companies receive only high-quality applications.',
'Enhance candidate experience – Candidates build profiles, upload resumes, and instantly see their suitability for roles. This guided application process prevents irrelevant job applications and directs candidates toward better-fit opportunities.',
'Streamline end-to-end recruitment – From posting jobs to shortlisting, interviews, and final hiring decisions, SmartHire AI reduces manual effort, improves efficiency, and enables data-driven hiring for both companies and candidates.',
],
      image: 'https://i.ibb.co/9KBW8Hw/Screenshot-2025-09-21-024244.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express', 'SQL', 'REST APIs', 'AI-Tools', 'GitHub Copilot'],
    liveUrl: '',
    githubUrl: 'https://github.com/sukhendu02/SmartHire-New',
    featured: true,
    type: ['fullstack'],
    year: 2025
  },
  {
    id: 3,
    title: 'DeltaBot - Crypto Trading Bot',
    description: [
      // 'A mobile-first web application that allows users to track workouts, set goals, and monitor progress over time.',
      'Built a fully automated crypto trading bot with trailing stop-loss, strategylogic, and real-time alerting.',
      'Integrated with exchange APIs to execute trades and track portfoliometrics every 5 minutes.',
      'Deployed on AWS EC2 with logs and monitoring via CloudWatch.',
      ],
      image: 'https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'Pandas', 'Numpy', 'Telegram Bot API'],
    liveUrl: '',
    githubUrl: 'https://github.com/sukhendu02/DeltaBot',
    featured: false,
    type: [],
    year: 2024
  },
  // {
  //   id: 4,
  //   title: 'Real Estate Platform',
  //   description: 'A comprehensive platform for property listings with virtual tours, appointment scheduling, and mortgage calculators.',
  //   image: 'https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Vue.js', 'Firebase', 'Google Maps API', 'Node.js', 'Express'],
  //   liveUrl: 'https://example.com/real-estate',
  //   githubUrl: 'https://github.com/johndoe/real-estate',
  //   featured: true,
  //   year: 2022
  // },
  // {
  //   id: 5,
  //   title: 'Weather Visualization Tool',
  //   description: 'An interactive visualization tool that displays global weather patterns using 3D globe rendering and real-time data.',
  //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['React', 'Three.js', 'D3.js', 'Weather API', 'WebGL'],
  //   liveUrl: 'https://example.com/weather-viz',
  //   githubUrl: 'https://github.com/johndoe/weather-visualization',
  //   featured: false,
  //   year: 2021
  // },
  // {
  //   id: 6,
  //   title: 'Project Management System',
  //   description: 'A collaborative project management tool with task assignment, timeline visualization, and resource allocation features.',
  //   image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io'],
  //   liveUrl: 'https://example.com/project-management',
  //   githubUrl: 'https://github.com/johndoe/project-management',
  //   featured: false,
  //   year: 2021
  // }
];

export const projectCategories = [
  { id: 'all', name: 'All Projects' },
  { id: 'featured', name: 'Featured' },
  // { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'Hosted', name: 'Hosted' }
];