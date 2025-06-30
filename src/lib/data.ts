import { Github, Code, Star, Briefcase, GraduationCap, DraftingCompass, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Enhancer', href: '#ai-enhancer' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/JOSH-MOTION', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-doe-560a7523b/', icon: Linkedin },
    { name: 'Email', href: 'mailto:joshuadoe168@example.com', icon: Mail },
];

export const projects = [
  {
    title: 'Payment Platform App',
    description: 'A full-stack platform for managing donations and payments, featuring a simple checkout flow, real-time tracking, and secure payment integration. Built to support charitable contributions, fundraising, and online payments seamlessly.',
    image: '/images/payment.png',
    tags: ['NextJs', 'Node.js', 'Tailwind', 'Firebase',],
    liveUrl: 'https://josh-pay-josh-motions-projects.vercel.app/',
    repoUrl: 'https://github.com/JOSH-MOTION/JoshPay.git',
    aiHint: 'online shopping',
  },
  {
    title: 'Expense Tracker App',
    description: 'A web application to help users track income and expenses, set budgets, and visualize spending patterns with a clean and intuitive interface.',
    image: '/images/budget.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://budgetwise-git-master-josh-motions-projects.vercel.app/login',
    repoUrl: 'https://github.com/JOSH-MOTION/budgetwise.git',
    aiHint: 'productivity app',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects in a visually appealing manner.',
    image: '/images/folio.png',
    tags: ['Next.js', 'GenAI', 'ShadCN UI', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'developer portfolio',
  },
    {
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using interactive charts and graphs, built with D3.js and React.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'API'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'charts graphs',
  },
];

export const skills = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Tailwind CSS', icon: DraftingCompass },
  { name: 'Firebase', icon: Star },
  { name: 'Git & GitHub', icon: Github },
];

export const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Codetrain Africa',
    period: '2024 - Present',
    description: 'Designing and delivering engaging lessons in web development and software engineering. Guiding students through real-world projects, providing mentorship, and fostering a collaborative learning environment. Also contributing to curriculum development and supporting the growth of Codetrain’s tech community.',
    icon: Briefcase,
  },
  {
    role: 'Software Engineer',
    company: 'Innovate Co.',
    period: '2019 - 2021',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.',
    icon: Briefcase,
  },
  {
    role: 'B.Sc. in Computer Science',
    company: 'University of Technology',
    period: '2015 - 2019',
    description: 'Graduated with honors, focusing on web development, algorithms, and artificial intelligence.',
    icon: GraduationCap,
  },
];
