import { Github, Code, Star, Briefcase, GraduationCap, DraftingCompass, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Enhancer', href: '#ai-enhancer' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Email', href: 'mailto:josh@example.com', icon: Mail },
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and payment integration.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'online shopping',
  },
  {
    title: 'Task Management App',
    description: 'A web application to help users organize tasks, set deadlines, and track progress with a clean and intuitive interface.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
    aiHint: 'productivity app',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects in a visually appealing manner.',
    image: 'https://placehold.co/600x400.png',
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
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Leading the development of user-facing features for a major B2B SaaS product. Mentoring junior developers and improving code quality and performance.',
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
