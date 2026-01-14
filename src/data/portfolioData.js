export const portfolioData = {
  // Personal Information
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    subtitle: "Building amazing web experiences",
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    location: "Your City, Country",
    bio: "I'm a passionate full-stack developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
    resume: "/path-to-your-resume.pdf", // Add your resume link
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourwebsite.com",
  },

  // Skills
  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-demo.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A modern weather application with location-based forecasts and interactive charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      technologies: ["React", "Weather API", "Chart.js"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.com",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      technologies: ["React", "CSS3", "React Router"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      featured: false,
    },
  ],

  // Experience
  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Led development of customer-facing web applications serving 100k+ users",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Built responsive websites for 20+ clients using React and modern CSS",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Implemented SEO best practices resulting in 50% traffic increase",
      ],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Startup Co.",
      location: "San Francisco, CA",
      period: "2019 - 2020",
      description: [
        "Developed and maintained company website and internal tools",
        "Fixed bugs and implemented new features based on user feedback",
        "Participated in agile development process and daily standups",
      ],
    },
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2015 - 2019",
      description: "Graduated with honors. Focus on web development and software engineering.",
    },
  ],
};