export const personal = {
  firstName: "SIRIGINEEDI",
  lastName: "UDAY SRI SAI",
  role: "Frontend Developer | React.js",
  bio: "Passionate Frontend Developer in React.js and modern web technologies. Crafting seamless user experiences with clean, efficient code. With expertise in building production-grade SPAs, I bring designs to life with pixel-perfect precision.",
  email: "udaysirigineedi915@gmail.com",
  phone: "+91 7780145458",
  location: "West Godavari, AP, India",
  github: "https://github.com/udaysrisai",
  linkedin: "https://www.linkedin.com/in/uday-sirigineedi-40b00b264/",
  // photo: "/profile.jpg",
};

export const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

export const skills = [
  { name: "React.js",      level: 88, color: "#61DAFB", icon: "⚛" },
  { name: "JavaScript",    level: 82, color: "#F7DF1E", icon: "JS" },
  { name: "HTML5",         level: 92, color: "#E34F26", icon: "H5" },
  { name: "CSS3",          level: 88, color: "#1572B6", icon: "C3" },
  { name: "REST API",      level: 78, color: "#00D4AA", icon: "🔗" },
  { name: "React Router",  level: 82, color: "#CA4245", icon: "RR" },
  { name: "Git",           level: 75, color: "#F05032", icon: "G"  },
  { name: "Axios",         level: 80, color: "#5A29E4", icon: "Ax" },
  // { name: "Python",        level: 65, color: "#3776AB", icon: "Py" },
  { name: "VS Code",       level: 90, color: "#007ACC", icon: "VS" },
];

export const education = [
  {
    degree: "B.Tech – Robotics Engineering",
    institution: "Swarnandhra College of Engineering & Technology (Autonomous)",
    location: "Seetharampuram",
    duration: "2021 – 2025",
    score: "CGPA: 6.7",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Tirumala Educational Institutions",
    location: "Bhimavaram",
    duration: "2019 – 2021",
    score: "55.9%",
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya Techno School",
    location: "Narsapuram",
    duration: "2018 – 2019",
    score: "CGPA: 7.7",
  },
];

export const experience = [
  {
    role: "Artificial Intelligence Intern",
    company: "Skill Dzire",
    duration: "2023",
    highlights: [
      "Built and evaluated machine learning models, performed data analysis, and presented findings to the team.",
      "Applied Python programming skills to solve real-world AI problems in a collaborative environment.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    subtitle: "Fintech Payment Management System",
    description:
      "A production-grade multi-page React SPA with 8 modules — Overview, User Management, Wallet Load, Transactions, Reports, Settlement, Beneficiary, and Wallet Balance. Features a Razorpay-style payment modal, 6 configurable gateways, real-time service status indicators, and full admin CRUD flows via REST APIs.",
    bullets: [
      "Multi-page React SPA with 8 modules including Overview, User Management, Wallet Load, Transactions, Reports, Settlement, Beneficiary, and Wallet Balance.",
      "Razorpay-style payment modal with desktop split-view and mobile bottom-sheet responsive layout, triggered from a multi-step wallet load form.",
      "Payment gateway selection with 6 configurable gateways, real-time service status indicators, and instant settlement badges.",
      "Full user management with admin create / activate / deactivate flows integrated with backend REST APIs via Axios.",
      "Reusable component architecture with persistent sidebar, topbar dropdown, and page-level state management using React hooks.",
    ],
    tech: ["React.js", "CSS3", "Axios", "REST API", "React Router"],
    techColors: ["#61DAFB", "#1572B6", "#5A29E4", "#00D4AA", "#CA4245"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project1.png",
    // year: "2024 – 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Adobe XD React Assignment",
    subtitle: "Pixel-perfect UI from Design Spec",
    description:
      "Built a pixel-perfect responsive web application from Adobe XD design specifications. Created reusable React components with clean project structure, implemented responsive layouts for mobile, tablet, and desktop screens, and deployed on Vercel.",
    bullets: [
      "Built a pixel-perfect responsive web application from Adobe XD design specifications.",
      "Created reusable React components and maintained clean project structure.",
      "Implemented responsive layouts for mobile, tablet, and desktop screens.",
      "Deployed the project on Vercel for live access.",
    ],
    tech: ["React.js", "CSS3", "Responsive", "Vercel"],
    techColors: ["#61DAFB", "#1572B6", "#00D4AA", "#000000"],
    liveUrl: "https://adobe-xd-react-assignment.vercel.app/",
    githubUrl: "#",
    image: "/project2.png",
    // year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Engine Auto Speed Control",
    subtitle: "IoT Vehicle Safety System",
    description:
      "An IoT-based vehicle safety prototype using Arduino UNO, ultrasonic sensors, and L298 motor driver. The system dynamically adjusts motor speed or triggers emergency braking based on real-time obstacle detection, with live feedback on a 16×2 LCD display.",
    bullets: [
      "Developed a prototype integrating IoT with modern automation to enhance vehicle safety using Arduino UNO and ultrasonic sensors.",
      "System dynamically adjusts motor speed or triggers emergency braking based on real-time obstacle detection.",
      "Live feedback on a 16×2 LCD display for real-time monitoring.",
    ],
    tech: ["Arduino", "IoT", "C++", "Ultrasonic Sensors", "LCD"],
    techColors: ["#00979D", "#00D4AA", "#3776AB", "#FF6B6B", "#FFD700"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/project3.png",
    // year: "2023",
    featured: false,
  },
];

export const activities = [
  "NSS Volunteer — Participated in community service projects, including organizing and leading various social initiatives.",
  "Acharana Volunteer — Contributed to a blood donation camp, supporting collection and distribution of blood to those in need.",
];
