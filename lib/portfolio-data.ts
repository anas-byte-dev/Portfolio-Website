export const profile = {
  name: 'Anas Siddiqui',
  roles: [
    'Java Full Stack Developer',
    'Spring Boot Developer',
    'React.js Developer',
  ],
  tagline:
    'I build full-stack applications end to end with Java, Spring Boot, React.js, MySQL, and REST APIs.',
  email: 'anassidd7256@gmail.com',
  phone: '+91 7256996846',
  github: 'https://github.com/anas-byte-dev',
  githubHandle: 'github.com/anas-byte-dev',
  linkedin: 'https://linkedin.com/in/anas-siddiqui-b46a23209',
  linkedinHandle: 'linkedin.com/in/anas-siddiqui',
  resume: '/resume.pdf',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  bio: [
    'I am currently training as a Java Full Stack Developer at QSpiders, sharpening a strong foundation in Core Java, Advance Java, OOP, Microservices, REST APIs,  and SQL.',
    'I enjoy turning ideas into working software — from designing database schemas to wiring up REST APIs and building responsive React front-ends.',
    'I have hands-on experience with CRUD operations, the MVC pattern, and database integration, and I am eager to join an engineering team as a Graduate Engineer Trainee or Java Developer.',
  ],
  stats: [
    { value: '3', label: 'Projects Built' },
    { value: 'B.Tech', label: 'CSE — Cyber Security' },
    { value: 'Full Stack', label: 'Java Trainee' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java (Core & Advanced)'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'JDBC',
      'Servlets',
      'JSP',
      'REST APIs',
    ],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Concepts',
    items: [
      'OOP',
      'Collections Framework',
      'Exception Handling',
      'Multithreading',
      'MVC',
      'CRUD',
      'SDLC',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Eclipse',
      'IntelliJ IDEA',
      'VS Code',
    ],
  },
]

export interface Project {
  title: string
  subtitle: string
  description: string
  stack: string[]
  href: string
  demoUrl?: string
  category: 'Full Stack' | 'Java Core' | 'Frontend'
  architecture?: string
  features?: string[]
}

export const marqueeTech = [
  'Java 17',
  'Spring Boot',
  'Spring MVC',
  'Hibernate / JPA',
  'React.js',
  'MySQL',
  'PostgreSQL',
  'RESTful APIs',
  'Microservices',
  'Git & GitHub',
  'Postman',
  'Maven',
  'OOP Architecture',
  'Docker Basics',
  'Cyber Security',
]

export const projects: Project[] = [
  {
    title: 'Online Food Ordering System',
    subtitle: 'Full-Stack Food Delivery Platform',
    category: 'Full Stack',
    description:
      'A feature-rich food ordering platform with responsive UI, live restaurant filtering, real-time cart state management, and seamless order checkout flows.',
    stack: ['React.js', 'JavaScript', 'CSS3', 'REST APIs', 'HTML5'],
    href: 'https://github.com/anas-byte-dev',
    demoUrl: 'https://github.com/anas-byte-dev',
    architecture: 'Component-driven frontend architecture interfacing with RESTful endpoints, optimized for low latency and state persistence.',
    features: [
      'Interactive restaurant discovery with multi-criteria category filtering',
      'Dynamic shopping cart with real-time total and discount calculations',
      'Modular React component hierarchy designed for high reusability',
      'Fully responsive mobile-first UI with smooth micro-interactions',
    ],
  },
  {
    title: 'File Encryption & Decryption System',
    subtitle: 'Cryptographic Desktop Application',
    category: 'Java Core',
    description:
      'A robust Java desktop utility delivering secure AES/custom cryptographic operations on files, built using Core Java, advanced file I/O streams, and solid OOP patterns.',
    stack: ['Java 17', 'File I/O Streams', 'OOP', 'Cryptography', 'Exception Handling'],
    href: 'https://github.com/anas-byte-dev',
    architecture: 'Layered Object-Oriented architecture separating encryption algorithms, file buffer controllers, and UI/CLI validation layers.',
    features: [
      'High-throughput binary and text file encryption & decryption',
      'Strict input verification with custom exception handling mechanisms',
      'Memory-efficient stream processing preventing buffer overflows on large files',
      'Secure key management principles and zero data leakage',
    ],
  },
  {
    title: 'Personal Developer Portfolio',
    subtitle: 'Modern Engineering Showcase',
    category: 'Frontend',
    description:
      'High-performance, modern developer portfolio featuring fluid Framer Motion animations, interactive Java runtime simulator, 3D tilt cards, and glassmorphism design.',
    stack: ['Next.js 16', 'React 19', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    href: 'https://github.com/anas-byte-dev',
    demoUrl: 'https://anas-siddiqui.vercel.app',
    architecture: 'Next.js App Router with server-rendered layout, client-side motion physics, and accessible responsive components.',
    features: [
      'Interactive Java code simulator with mock Spring Boot runtime logs',
      'Physics-based Framer Motion spring scroll reveals & 3D tilt hover cards',
      'Interactive category filtering across skills and engineering projects',
      'One-click clipboard actions and celebratory feedback animations',
    ],
  },
]

export const experience = [
  {
    org: 'QSpiders, Noida',
    role: 'Java Full Stack Development Training',
    period: 'Jul 2026 – Present',
    points: [
      'Core Java, Advanced Java, Spring Boot, Spring MVC, Hibernate, REST APIs, JDBC, MySQL, and React.js.',
      'Hands-on practice with MVC architecture, CRUD operations, and database design.',
    ],
  },
  {
    org: 'NareshIT, Ameerpet, Hyderabad',
    role: 'Core Java Training',
    period: 'Mar 2022 – May 2022',
    points: [
      'Object-oriented programming, collections framework, and exception handling.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering (Cyber Security)',
    school: 'Government Engineering College, Samastipur, Bihar',
    university: 'Bihar Engineering University',
    period: '2023 – 2026',
    score: 'CGPA 7.6 / 10',
  },
  {
    degree: 'Diploma, Computer Science & Engineering',
    school: 'Maulana Azad National Urdu University, Hyderabad',
    university: '',
    period: '2019 – 2022',
    score: 'CGPA 9.02 / 10',
  },
]

export const certifications = [
  {
    title: 'Fundamentals of Object Oriented Programming',
    issuer: 'NPTEL',
    detail: 'Elite — 62%',
  },
  {
    title: 'PostgreSQL',
    issuer: 'Spoken Tutorial, IIT Bombay',
    detail: 'Certified',
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    detail: 'Certified',
  },
  {
    title: 'Effective Leadership',
    issuer: 'HP LIFE',
    detail: 'Certified',
  },
]

export const leadership = [
  {
    role: 'Training & Placement Coordinator',
    org: 'Government Engineering College, Samastipur',
    period: 'Dec 2025 – May 2026',
    description:
      'Coordinated communication between students, faculty, and recruiters during placement drives.',
  },
  {
    role: 'Startup Cell Representative',
    org: 'Government Engineering College, Samastipur',
    period: 'Aug 2025 – May 2026',
    description:
      'Represented students in Startup Cell activities and campus innovation events.',
  },
]
