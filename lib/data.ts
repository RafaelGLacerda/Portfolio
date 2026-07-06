export const profile = {
  name: 'Rafael Lacerda',
  role: 'Full-Stack Software & Web Engineer',
  location: 'Salvador, Bahia — Brazil',
  email: 'Rafaellacerda2004@gmail.com',
  phone: '+55 (71) 99132-4319',
  photo: '/images/rafael.jpg',
  intro:
    'I build fast, reliable full-stack web applications end to end — from clean, accessible interfaces to robust REST APIs. Currently pursuing Computer Science while shipping production software.',
  socials: {
    github: 'https://github.com/RafaelGLacerda',
    linkedin: 'https://www.linkedin.com/in/rafael-lacerda',
    email: 'mailto:Rafaellacerda2004@gmail.com',
  },
}

export const about = {
  paragraphs: [
    "I'm a 21-year-old full-stack software and web developer from Salvador, Brazil. I hold a degree in Systems Analysis and Development from UNIFACS and I'm currently in the 8th semester of a Computer Science degree.",
    'I care deeply about writing clean, maintainable code and delivering real results. I enjoy the full lifecycle of software — designing intuitive interfaces, architecting APIs, testing thoroughly, and shipping with discipline and attention to detail.',
    'I combine technical skill with strong communication and a proactive, organized mindset, always looking to grow and contribute effectively to collaborative teams.',
  ],
  highlights: [
    { value: '4+', label: 'Years learning & building' },
    { value: '20+', label: 'Projects shipped' },
    { value: '6 mo', label: 'Professional experience' },
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
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'REST APIs', 'Express', 'Postman'],
  },
  {
    category: 'Testing & QA',
    skills: ['Playwright', 'API Testing', 'UI Testing'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Portainer', 'Git', 'GitHub', 'Vercel'],
  },
  {
    category: 'Other',
    skills: ['Mobile Development', 'AI Integration', 'OpenRouter', 'Google Workspace'],
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
    role: 'Web Developer — Intern',
    company: 'SINART',
    period: '2026 — 2027',
    location: 'Salvador, BR',
    description:
      'Contributed to the development and maintenance of a robust internal system, working with tight deadlines, constant demands, and a high level of responsibility.',
    achievements: [
      'Built backend features with Node.js and REST APIs, tested with Postman.',
      'Containerized and managed services using Docker and Portainer.',
      'Developed frontend interfaces with React and Tailwind CSS.',
      'Wrote automated QA tests with Playwright for both APIs and UIs.',
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
      'An AI-powered chat assistant with persistent conversations, streaming responses, and a clean dark interface. Conversations are saved and can be exported.',
    image: '/images/chatbot.png',
    tech: ['Next.js', 'TypeScript', 'OpenRouter', 'Tailwind CSS'],
    demo: 'https://assistentechatbotv0.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/chatbot',
  },
  {
    title: 'StoreManager',
    description:
      'A management dashboard for retail stores — track products, customers, sales and revenue with real-time stats and a polished admin experience.',
    image: '/images/storemanager.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://storemanager-ztwx.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/StoreManager',
  },
  {
    title: 'Costs',
    description:
      'A project and budget management platform. Create projects, define budgets, add services and keep costs under control with a simple, focused UI.',
    image: '/images/costs.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://costsservice.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/Costs',
  },
  {
    title: 'ReciclaSSA',
    description:
      'A web platform for scheduling recyclable material collections in Salvador, promoting sustainability with an approachable, friendly interface.',
    image: '/images/reciclassa.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    demo: 'https://reciclassa.onrender.com/',
    source: 'https://github.com/RafaelGLacerda/A3',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]
