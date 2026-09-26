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
    { value: '4', label: 'Projects Built' },
    { value: 'B.Tech', label: 'CSE — Cyber Security' },
    { value: 'Full Stack', label: 'Java Trainee' },
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java (Core & Advanced)', 'Java 21'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    title: 'Backend',
    items: [
      'Spring Boot 3',
      'Spring Security 6',
      'Spring Data JPA',
      'Hibernate',
      'Spring MVC',
      'REST APIs',
      'JDBC',
    ],
  },
  {
    title: 'AI & Cloud',
    items: [
      'Google Gemini AI',
      'ReAct Multi-Tool Agents',
      'Docker',
      'Docker Compose',
    ],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL', 'H2 Database'],
  },
  {
    title: 'Concepts',
    items: [
      'OOP & Design Patterns',
      'Multithreading & Concurrency',
      'Collections Framework',
      'Exception Handling',
      'MVC Architecture',
      'CRUD Operations',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'Maven',
      'Swagger / OpenAPI',
      'IntelliJ IDEA',
      'VS Code',
    ],
  },
]

export interface TechCategory {
  category: string
  items: string[]
}

export interface EngineeringPattern {
  label: string
  detail: string
}

export interface DemoAccount {
  role: string
  email: string
  password: string
}

export interface Project {
  title: string
  subtitle: string
  domain?: string
  description: string
  stack: string[]
  href: string
  demoUrl?: string
  apiDocsUrl?: string
  category: 'Full Stack' | 'Java Core' | 'Frontend'
  architecture?: string
  features?: string[]
  techCategories?: TechCategory[]
  engineeringPatterns?: EngineeringPattern[]
  demoAccounts?: DemoAccount[]
  frontendRepo?: string
  backendRepo?: string
}

export const marqueeTech = [
  'Java 17/21',
  'Spring Boot 3',
  'React 19',
  'Google Gemini API',
  'Server-Sent Events (SSE)',
  'Spring Data JPA',
  'Docker',
  'REST APIs',
  'OpenAPI / Swagger',
  'Vite 8',
  'Hibernate',
  'Autonomous Agents',
  'MySQL',
  'PostgreSQL',
  'Git & GitHub',
  'Maven',
  'Cyber Security',
]

export const projects: Project[] = [
  {
    title: 'MedPlus — Smart Healthcare & Doctor Booking System',
    subtitle: 'Full-Stack Healthcare & Clinical AI Platform',
    domain: 'Enterprise Telehealth & AI Clinical Triaging Platform',
    category: 'Full Stack',
    description:
      'An enterprise-grade telehealth platform featuring Google Gemini AI clinical triaging with multi-model failover, real-time doctor appointment slot scheduling, role-based JWT security (Patient/Doctor/Admin), and an interactive dark-mode medical copilot.',
    stack: [
      'Spring Boot 3',
      'Java 21',
      'React 19',
      'PostgreSQL (Supabase)',
      'Google Gemini AI',
      'Tailwind CSS',
      'REST APIs',
      'Docker',
    ],
    href: 'https://github.com/anas-byte-dev/MedPlus-Frontend',
    frontendRepo: 'https://github.com/anas-byte-dev/MedPlus-Frontend',
    backendRepo: 'https://github.com/anas-byte-dev/MedPlus-Backend',
    demoUrl: 'https://medplus-specialist-healthcare-and-opd.vercel.app/',
    architecture:
      'Decoupled multi-tier telehealth architecture powered by a high-performance Spring Boot 3 & Java 21 RESTful backend connected to Supabase PostgreSQL, paired with a React 19 frontend styled with Tailwind CSS, featuring an intelligent Google Gemini AI clinical triaging and failover engine.',
    features: [
      'Google Gemini AI Clinical Triaging: Clinical symptom analysis, automated urgency scoring, and triage categorization with multi-model failover.',
      'Real-Time Doctor Slot Scheduling: Conflict-free appointment slot booking, dynamic doctor availability calendars, and instant status updates.',
      'Role-Based JWT Security: Robust stateless security filters with separate authorization scopes for Patients, Doctors, and Administrators.',
      'Interactive Medical Copilot: Obsidian dark-mode conversational clinical assistant guiding patients through preliminary queries and specialist recommendation.',
      'Cloud Relational Database: High-availability PostgreSQL database hosted on Supabase with Spring Data JPA entities and connection pooling.',
      'Containerized DevOps Workflow: Dockerized multi-stage Spring Boot microservice build paired with edge-optimized Vercel deployment for React 19.',
    ],
    techCategories: [
      {
        category: 'Backend Architecture',
        items: [
          'Spring Boot 3',
          'Java 21',
          'Spring Security 6',
          'Spring Data JPA',
          'REST APIs',
          'Jakarta Validation',
          'Maven',
        ],
      },
      {
        category: 'AI & Clinical Intelligence',
        items: [
          'Google Gemini AI',
          'Multi-Model Failover Engine',
          'Clinical Symptom Triaging',
          'Interactive Medical Copilot',
        ],
      },
      {
        category: 'Frontend & UI',
        items: [
          'React 19',
          'Tailwind CSS',
          'Vite',
          'Lucide Vector Icons',
          'Dark Mode Telehealth UI',
        ],
      },
      {
        category: 'Database & DevOps',
        items: [
          'PostgreSQL (Supabase)',
          'Docker & Dockerfile',
          'JWT Stateless Auth',
          'Vercel Edge Deployment',
        ],
      },
    ],
    engineeringPatterns: [
      {
        label: 'Decoupled 2-Tier Architecture',
        detail:
          'Modular separation between the Spring Boot 3 REST API backend and the React 19 single-page application, connected via authenticated RESTful endpoints.',
      },
      {
        label: 'Resilient Multi-Model AI Failover',
        detail:
          'Graceful degradation strategy switching across Gemini models during rate limits or network issues to ensure uninterrupted clinical triaging.',
      },
      {
        label: 'Role-Based Access Control (RBAC)',
        detail:
          'JWT bearer authorization ensuring strictly partitioned portals and data access for Patients, Doctors, and Hospital Admins.',
      },
      {
        label: 'Conflict-Free Slot Allocation',
        detail:
          'Transactional scheduling logic preventing race conditions and double-booking across concurrent doctor appointment requests.',
      },
    ],
  },
  {
    title: 'HireSphere AI',
    subtitle: 'Autonomous AI Recruitment & Talent Intelligence Platform',
    domain: 'Autonomous Agentic AI & Enterprise Talent Intelligence (ATS)',
    category: 'Full Stack',
    description:
      'A full-stack, enterprise-grade Applicant Tracking System (ATS) and talent intelligence engine built using Java 17/21, Spring Boot 3, and React 19. It automates candidate screening using Google Gemini AI, powers real-time candidate-recruiter event synchronization via Server-Sent Events (SSE), and features an interactive turn-by-turn AI interview coach.',
    stack: [
      'Java 17/21',
      'Spring Boot 3',
      'React 19',
      'Google Gemini API',
      'Server-Sent Events (SSE)',
      'Spring Data JPA',
      'Docker',
      'REST APIs',
      'OpenAPI / Swagger',
      'Vite 8',
    ],
    href: 'https://github.com/anas-byte-dev/HireSphereAI-FrontEnd',
    frontendRepo: 'https://github.com/anas-byte-dev/HireSphereAI-FrontEnd',
    backendRepo: 'https://github.com/anas-byte-dev/HireSphereAI-BackEnd',
    demoUrl: 'https://hire-sphere-ai.vercel.app/',
    architecture:
      'Decoupled 2-tier architecture featuring a high-performance Spring Boot 3 REST API on Render and a responsive React 19 SPA deployed on Vercel, bound by a zero-latency SSE real-time event bus.',
    features: [
      'Candidate Screening & Fit Agent: Analyzes resumes against job requirements, delivering 0–100% semantic match scores, identifying skill gaps, and generating role-specific STAR interview rubrics.',
      'Interactive AI Mock Interviewer & Coach: Turn-by-turn conversational technical mock interviews with real-time feedback and transcript persistence.',
      'AI Job & Rubric Generator: Automated one-click creation of job descriptions, responsibilities, and compensation benchmarks.',
      'Real-Time Data Engine: Zero-reload candidate stage tracking (APPLIED → REVIEWING → SHORTLISTED → INTERVIEW_SCHEDULED) synchronized across sessions via SSE streams.',
      'Role-Based Workflows: Multi-tenant portals for Candidates, Recruiters, and Administrators with isolated dashboards and permissions.',
      'Deployment: Multi-stage Dockerized build (eclipse-temurin-17-jre-alpine) deployed on Render Cloud + Vercel edge CDN.',
    ],
    techCategories: [
      {
        category: 'Backend Architecture',
        items: [
          'Java 17/21 (Records, Pattern Matching)',
          'Spring Boot 3',
          'Spring Data JPA',
          'Hibernate',
          'REST APIs',
          'OpenAPI / Swagger',
          'Maven',
        ],
      },
      {
        category: 'Agentic AI Suite',
        items: [
          'Google Gemini API',
          'Candidate Screening & Fit Agent',
          'Interactive AI Mock Interviewer & Coach',
          'AI Job & Rubric Generator',
          'STAR Interview Rubrics',
        ],
      },
      {
        category: 'Real-Time & Synchronization',
        items: [
          'Server-Sent Events (SSE)',
          'Zero-latency Event Bus',
          'Live Stage Sync (Applied to Scheduled)',
          'Multi-tenant Session Isolation',
        ],
      },
      {
        category: 'Frontend & UI',
        items: [
          'React 19',
          'Vite 8',
          'Single Page Application (SPA)',
          'Responsive Dark/Light UI',
          'Lucide Vector Icons',
        ],
      },
      {
        category: 'DevOps & Cloud Hosting',
        items: [
          'Multi-stage Docker (eclipse-temurin-17-jre-alpine)',
          'Render Cloud (Spring Boot REST API)',
          'Vercel Edge CDN (React SPA)',
        ],
      },
    ],
    engineeringPatterns: [
      {
        label: 'Architecture Overview',
        detail:
          'Decoupled 2-tier architecture featuring a high-performance Spring Boot 3 REST API on Render and a responsive React 19 SPA deployed on Vercel, bound by a zero-latency SSE real-time event bus.',
      },
      {
        label: 'Agentic AI Suite',
        detail:
          'Candidate Screening & Fit Agent (0–100% semantic match), Interactive Turn-by-Turn AI Mock Interviewer & Coach with persistent transcripts, and automated 1-click Job/Rubric generation.',
      },
      {
        label: 'Real-Time Data Engine',
        detail:
          'Zero-reload candidate stage tracking (APPLIED → REVIEWING → SHORTLISTED → INTERVIEW_SCHEDULED) synchronized across sessions via SSE streams.',
      },
      {
        label: 'Role-Based Workflows',
        detail:
          'Multi-tenant portals for Candidates, Recruiters, and Administrators with isolated dashboards and permissions.',
      },
      {
        label: 'Deployment & DevOps',
        detail:
          'Multi-stage Dockerized build (eclipse-temurin-17-jre-alpine) deployed on Render Cloud + Vercel edge CDN.',
      },
    ],
    demoAccounts: [
      {
        role: 'Candidate',
        email: 'alice@example.com',
        password: 'candidate123',
      },
      {
        role: 'Recruiter',
        email: 'recruiter@techcorp.com',
        password: 'recruiter123',
      },
      {
        role: 'Admin',
        email: 'admin@hiresphere.ai',
        password: 'admin123',
      },
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
    demoUrl: 'https://anas-sidd-portfolio.vercel.app/',
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
