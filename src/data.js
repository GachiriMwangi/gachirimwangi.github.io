import {
  heroPhoto,
  aboutPhoto,
  cvPdf,
  resumePdf,
  gerichImg,
  blogImg,
  coursesImg,
} from './assets'

export const personal = {
  name: 'Gachiri Mwangi',
  firstName: 'Gachiri',
  role: 'Full Stack Engineer',
  tagline: 'React on the frontend. Laravel on the backend. AI where it matters.',
  bio: "I'm a full stack developer working with React on the frontend and Laravel (PHP) on the backend, with SQL as my go-to database layer. I also integrate AI into systems — including a full customer support chatbot integration into a live IFMS platform. I enjoy building clean, reliable web applications that solve real problems.",
  location: 'Nairobi, Kenya',
  email: 'gachirimwangi2021@gmail.com',
  phone: '+254 112 211 691',
  linkedin: 'https://www.linkedin.com/in/gachiri-mwangi/',
  github: 'https://github.com/gachirimwangi',
  cvPath: cvPdf,
  resumePath: resumePdf,
  heroPhoto,
  aboutPhoto,
  stats: [
    { value: '10+',  label: 'Projects Built' },
    { value: '2+',   label: 'Years Experience' },
    { value: '3',    label: 'Tech Stacks' },
    { value: '100%', label: 'Commitment' },
  ],
}

export const skills = [
  { label: 'React.js',       percent: 85 },
  { label: 'Laravel / PHP',  percent: 85 },
  { label: 'SQL / MySQL',    percent: 88 },
  { label: 'REST APIs',      percent: 85 },
  { label: 'AI Integration', percent: 80 },
  { label: 'WordPress',      percent: 70 },
]

export const techTags = [
  'JavaScript', 'React', 'PHP', 'Laravel',
  'MySQL', 'SQL', 'REST API', 'AI Integration', 'Git', 'GitHub',
]

export const journey = [
  {
    type: 'education',
    date: '2021 – Present',
    title: 'BSc. Computer Science',
    institution: 'Jomo Kenyatta University of Agriculture & Technology',
    description: 'Studying core computer science fundamentals: algorithms, data structures, software engineering, databases and networks.',
  },
  {
    type: 'education',
    date: '2017 – 2020',
    title: 'Higher Secondary School (KCSE)',
    institution: "St. Mary's Boys High School",
    description: 'Completed the Kenya Certificate of Secondary Education. Grade: A−.',
  },
]

export const projects = [
  {
    title: 'Restaurant Website — React',
    description: 'A fully responsive restaurant landing page built with React, featuring a modern UI, animated menu sections, and smooth scroll navigation.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/GachiriMwangi/Restaurant-Website-React-Project',
    live: null,
    image: gerichImg,
  },
  {
    title: 'Blog Posts Platform — EJS',
    description: 'A full-stack blogging platform where users can create, read, and share posts. Built with a server-side rendered EJS frontend backed by a SQL database.',
    tags: ['EJS', 'SQL', 'REST API'],
    github: 'https://github.com/GachiriMwangi/EJS-Posts-Project',
    live: null,
    image: blogImg,
  },
  {
    title: 'Course Prompt — Next.js',
    description: 'A Next.js application that fetches and displays curated courses from GitHub repositories, with clean filtering and card-based layout.',
    tags: ['Next.js', 'React', 'GitHub API'],
    github: 'https://github.com/GachiriMwangi/NextJs-posts-project',
    live: null,
    image: coursesImg,
  },
]

export const testimonials = [
  {
    name: 'Client Name',
    role: 'CEO, Company Name',
    text: 'Gachiri delivered our project ahead of schedule with exceptional attention to detail. The website he built for us has significantly improved our online presence.',
    avatar: null,
    initials: 'CN',
  },
  {
    name: 'Colleague Name',
    role: 'Senior Engineer, Tech Company',
    text: 'Working alongside Gachiri was a great experience. He brings strong problem-solving skills and communicates clearly throughout the project.',
    avatar: null,
    initials: 'CN',
  },
  {
    name: 'Client Name',
    role: 'Founder, Startup',
    text: 'Highly recommend Gachiri for any web development work. He understood our requirements quickly and produced clean, maintainable code.',
    avatar: null,
    initials: 'CN',
  },
]
