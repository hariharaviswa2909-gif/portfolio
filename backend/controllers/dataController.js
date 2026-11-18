const getProjects = async (req, res) => {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.', image: '/images/project1.jpg', technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux Toolkit', 'Stripe API'], github: 'https://github.com', demo: 'https://demo.example.com', featured: true },
    { id: 6, title: 'Portfolio Website', description: 'This very portfolio website! Built with React.js, Node.js, and MongoDB featuring smooth animations, responsive design, and a contact form.', image: '/images/project6.jpg', technologies: ['React.js', 'Node.js', 'MongoDB', 'Framer Motion', 'Material UI'], github: 'https://github.com', demo: 'https://demo.example.com', featured: true }
  ];
  res.json({ success: true, data: projects });
};

const getSkills = async (req, res) => {
  const skills = {
    frontend: [
      { name: 'React.js', level: 90, icon: 'react' },
      { name: 'JavaScript', level: 88, icon: 'javascript' },
      { name: 'HTML5', level: 95, icon: 'html5' },
      { name: 'CSS3', level: 90, icon: 'css3' },
      { name: 'Redux Toolkit', level: 80, icon: 'redux' },
      { name: 'Material UI', level: 85, icon: 'mui' },
      { name: 'Responsive Design', level: 92, icon: 'responsive' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: 'nodejs' },
      { name: 'Express.js', level: 83, icon: 'express' },
      { name: 'REST APIs', level: 88, icon: 'api' }
    ],
    database: [
      { name: 'MongoDB', level: 82, icon: 'mongodb' },
      { name: 'MySQL', level: 70, icon: 'mysql' }
    ],
    tools: [
      { name: 'Git', level: 88, icon: 'git' },
      { name: 'GitHub', level: 90, icon: 'github' },
      { name: 'Postman', level: 85, icon: 'postman' },
      { name: 'VS Code', level: 95, icon: 'vscode' }
    ]
  };
  res.json({ success: true, data: skills });
};

const getExperience = async (req, res) => {
  const experience = [
    { id: 1, company: 'Tata consultancy services', position: 'Systems Engineer', duration: 'Jan 2024 - Present', location: 'Remote', responsibilities: ['Developed and maintained full-stack web applications using React.js and Node.js', 'Built RESTful APIs integrated with MongoDB for scalable data management', 'Collaborated with cross-functional teams to deliver high-quality software', 'Implemented responsive UI designs using Material UI and CSS3', 'Reduced load times by 40% through code optimization and lazy loading'], technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Material UI', 'Redux'] },
    { id: 3, company: 'Freelance', position: 'Web Developer', duration: 'None', location: 'Remote', responsibilities: ['Developed custom websites and web applications for clients', 'Built e-commerce solutions with shopping cart and payment integration', 'Provided ongoing maintenance and feature updates', 'Communicated directly with clients to gather requirements'], technologies: ['React.js', 'Node.js', 'MongoDB', 'JavaScript', 'CSS3'] }
  ];
  res.json({ success: true, data: experience });
};

module.exports = { getProjects, getSkills, getExperience };
