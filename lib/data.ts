export const profile = {
  name: 'Rafael Lacerda',
  role: 'Full-Stack Software Engineer',
  location: 'Salvador, Bahia — Brazil',
  email: 'Rafaellacerda2004@gmail.com',
  phone: '+55 (71) 99132-4319',
  photo: '/images/rafael.jpg',
  intro:
    'Full-Stack Software Engineer passionate about building scalable web applications, REST APIs, modern user interfaces, automated testing, and AI-powered solutions. Currently pursuing a Computer Science degree while developing production-ready software.',
  socials: {
    github: 'https://github.com/RafaelGLacerda',
    linkedin: 'https://www.linkedin.com/in/rafael-lacerda',
    email: 'mailto:Rafaellacerda2004@gmail.com',
  },
}

export const about = {
  paragraphs: [
    "I'm a 21-year-old Full-Stack Software Engineer from Salvador, Brazil. I earned a degree in Systems Analysis and Development from UNIFACS and I'm currently pursuing a Bachelor's degree in Computer Science.",

    'My experience covers the complete software development lifecycle—from designing intuitive user interfaces and building scalable backend services to database modeling, automated testing, containerization, cloud deployment, and AI integration.',

    'I enjoy solving real-world problems through clean architecture, maintainable code, and modern technologies. I value teamwork, continuous learning, and delivering software with quality, performance, and attention to detail.',
  ],

  highlights: [
    {
      value: '20+',
      label: 'Projects Completed',
    },
    {
      value: '4+',
      label: 'Years of Development',
    },
    {
      value: '6 mo',
      label: 'Industry Experience',
    },
  ],

  education: [
    {
      degree: 'B.Sc. Computer Science',
      school: 'Universidade Salvador (UNIFACS)',
      period: '2025 — 2027',
    },
    {
      degree: 'Systems Analysis & Development',
      school: 'Universidade Salvador (UNIFACS)',
      period: '2023 — 2025',
    },
  ],
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Shadcn',
    ],
  },

  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'JWT',
      'Socket.IO',
      'Java',
      'Python',
    ],
  },

  {
    category: 'Databases',
    skills: [
      'MongoDB',
      'Prisma ORM',
      'Firebase',
      'PostgreSQL',
      'DBeaver',
    ],
  },

  {
    category: 'Testing & QA',
    skills: [
      'Playwright',
      'Postman',
      'API Testing',
      'UI Testing',
      'Manual Testing',
      'Regression Testing',
    ],
  },

  {
    category: 'AI & Developer Tools',
    skills: [
      'ChatGPT',
      'Claude Code',
      'v0',
      'DeepSeek',
      'Gemini',
      'Gwen Coder',
      'N8N',
      'VS Code',
      'Git',
      'GitHub',
    ],
  },

  {
    category: 'DevOps & Environment',
    skills: [
      'Docker',
      'Portainer',
      'Render',
      'Vercel',
      'Netlify',
      'Windows 11',
      'WSL (Ubuntu)',
      'PowerShell',
      'CMD',
    ],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Web Developer Intern',
    company: 'SINART',
    period: '2026 — 2027',
    location: 'Salvador, Brazil',

    description:
      'Contributed to the development and maintenance of a production internal platform, collaborating in a fast-paced environment with real business requirements, tight deadlines, and high-quality standards.',

    achievements: [
      'Developed backend features using Node.js, Express and REST APIs.',
      'Built responsive frontend interfaces with React and Tailwind CSS.',
      'Created automated UI and API tests using Playwright.',
      'Managed containers and deployment environments with Docker and Portainer.',
      'Validated and documented APIs using Postman.',
      'Worked closely with the development team following software engineering best practices.',
    ],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  demo?: string
  source: string
}

export const projects: Project[] = [
  {
    title: 'ChatBot IA',
    description:
      'Modern AI chat platform featuring conversation history, streaming responses, multiple AI models, markdown rendering, and a responsive user interface.',
    image: '/images/chatbot.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'OpenRouter',
    ],
    demo: 'https://assistentechatbotv0.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/chatbot',
  },

  {
    title: 'StoreManager',
    description:
      'Retail management dashboard for inventory, customers, orders, and analytics with a modern admin interface and responsive design.',
    image: '/images/storemanager.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    demo: 'https://storemanager-ztwx.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/StoreManager',
  },

  {
    title: 'Costs',
    description:
      'Project cost management application that allows users to create projects, control budgets, and manage services efficiently.',
    image: '/images/costs.png',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    demo: 'https://costsservice.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/Costs',
  },

  {
    title: 'ReciclaSSA',
    description:
      'Sustainability platform that connects citizens with recyclable waste collection services through scheduling and reward features.',
    image: '/images/reciclassa.png',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    demo: 'https://reciclassa.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/A3',
  },
]

export const navLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
]