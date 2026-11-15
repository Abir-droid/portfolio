import { Project, SkillCategory, JourneyMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: 'Md. Abirul Karim Sarkar',
  shortName: 'Abir',
  handle: 'Abir-droid',
  role: 'Software Engineering Student · Developer',
  university: 'Daffodil International University (DIU)',
  degree: 'BSc in Software Engineering',
  location: 'Dhaka, Bangladesh',
  bioHeadline: 'Building ideas into digital experiences.',
  bioIntro: "I'm Abir, a software engineering student passionate about building web applications, exploring systems, and turning ideas into working software.",
  aboutParagraphs: [
    "I am an aspiring full-stack developer and software engineering student at Daffodil International University in Dhaka, Bangladesh. Rather than simply learning theoretical concepts, I thrive on building actual projects, configuring systems from scratch, and understanding how data flows across the entire stack.",
    "My technical journey bridges the gap between web application development and systems infrastructure. From architecting Python/Django backends and crafting responsive client interfaces to deploying containerized applications with Docker and Coolify on my personal home server, I love the craftsmanship of end-to-end engineering.",
    "When I'm not writing code, you'll find me tweaking my Arch Linux setup, experimenting with self-hosted services, exploring local LLMs, and diving into computer science fundamentals. I believe continuous curiosity and deliberate practice are the cornerstones of becoming a great engineer."
  ],
  status: 'SOFTWARE ENGINEERING STUDENT · BANGLADESH',
  homelabStatus: 'ONLINE · abirdroid.ddns.net',
  email: 'abirul.karim.dev@gmail.com', // configurable
  fallbackEmail: 'sarkar.abirul@gmail.com',
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Abir-droid',
    iconName: 'Github',
    label: 'github.com/Abir-droid',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428',
    iconName: 'Linkedin',
    label: 'linkedin.com/in/md-abirul-karim-sarkar',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/abirul.karim',
    iconName: 'Facebook',
    label: 'facebook.com/abirul.karim',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Abirdroid',
    iconName: 'Send',
    label: 't.me/Abirdroid',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    subtitle: 'Core programming and scripting languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 'proficient', details: 'Web backends, automation scripts, data handling' },
      { name: 'JavaScript', level: 'proficient', details: 'DOM manipulation, async patterns, interactive web apps' },
      { name: 'C', level: 'proficient', details: 'Algorithms, data structures, pointer mechanics' },
      { name: 'HTML5', level: 'proficient', details: 'Semantic markup, accessibility, modern standards' },
      { name: 'CSS3', level: 'proficient', details: 'Responsive design, Flexbox, Grid, custom styling' },
      { name: 'Go (Golang)', level: 'exploring', details: 'Concurrency primitives, lightweight network services' },
    ],
  },
  {
    title: 'Frameworks & Web Dev',
    subtitle: 'Full-stack application architecture',
    iconName: 'Layers',
    skills: [
      { name: 'Django', level: 'proficient', details: 'MTV architecture, ORM, authentication, routing' },
      { name: 'Frontend Engineering', level: 'proficient', details: 'Component architecture, responsive UI, state flow' },
      { name: 'REST APIs', level: 'proficient', details: 'API design, JSON serialization, client consumption' },
      { name: 'WebSockets & WebRTC', level: 'exploring', details: 'Real-time duplex data, audio/video channels' },
    ],
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Data persistence and query management',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 'proficient', details: 'Relational schema design, indexing, SQL queries' },
      { name: 'SQLite', level: 'proficient', details: 'Lightweight local storage, prototyping, lab databases' },
    ],
  },
  {
    title: 'Systems & Infrastructure',
    subtitle: 'Operating environments and deployment',
    iconName: 'Server',
    skills: [
      { name: 'Linux (Arch & Debian)', level: 'proficient', details: 'Daily driver OS, systemctl, package management, CLI' },
      { name: 'Docker', level: 'proficient', details: 'Containerization, Dockerfile recipes, compose files' },
      { name: 'Coolify', level: 'proficient', details: 'Self-hosted PaaS management for web applications' },
      { name: 'Home Server & Networking', level: 'proficient', details: 'Port forwarding, Dynamic DNS (DDNS), reverse proxy' },
      { name: 'Git & GitHub', level: 'proficient', details: 'Version control, branch management, collaborative workflows' },
      { name: 'Bash Scripting', level: 'proficient', details: 'Automation, system maintenance, setup scripts' },
    ],
  },
  {
    title: 'Exploration & Tools',
    subtitle: 'AI, tooling, and developer workflows',
    iconName: 'Terminal',
    skills: [
      { name: 'Local LLMs (Ollama)', level: 'exploring', details: 'Running open weights locally, AI assisted development' },
      { name: 'System Troubleshooting', level: 'proficient', details: 'Diagnostic logs, hardware checks, network debugging' },
      { name: 'VS Code & CLI Tools', level: 'proficient', details: 'Productive developer environment and terminal workflows' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'chatbox',
    name: 'ChatBox — Self-Hosted Chat & Calling App',
    tagline: 'Real-time communication suite with voice/video call capability',
    description: 'A self-hosted real-time messaging web application featuring channel-based chat and peer-to-peer audio and video calling functionality. Deployed and served live on my personal home server infrastructure.',
    category: 'fullstack',
    categoryLabel: 'Full-Stack / Real-Time',
    techStack: ['JavaScript', 'WebRTC', 'WebSockets', 'HTML5/CSS3', 'Docker', 'Coolify'],
    githubUrl: 'https://github.com/Abir-droid/chatbox',
    liveUrl: 'https://abirdroid.ddns.net/chatbox',
    featured: true,
    badge: 'Live on Homelab',
    highlights: [
      'Peer-to-peer audio and video calling built directly in the browser',
      'Instant real-time bidirectional message delivery',
      'Containerized with Docker and served via Coolify PaaS on personal server',
      'Responsive design engineered for mobile and desktop screens'
    ],
    stats: {
      language: 'JavaScript',
      status: 'Active / Deployed'
    }
  },
  {
    id: 'qr-attendance',
    name: 'QR Attendance System',
    tagline: 'Automated campus attendance tracking using dynamic QR tokens',
    description: 'A practical university attendance solution using Python and Django. Generates time-sensitive dynamic QR codes for instructors to present during lectures, allowing students to authenticate and record verified attendance seamlessly.',
    category: 'python',
    categoryLabel: 'Python / Full-Stack',
    techStack: ['Python', 'Django', 'SQLite/MySQL', 'QR Code Engine', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/Abir-droid/qr-attendance',
    liveUrl: 'https://abirdroid.ddns.net/qrattendance/',
    featured: true,
    badge: 'University Utility',
    highlights: [
      'Dynamic QR generation preventing proxy attendance and link sharing',
      'Role-based dashboards for course instructors and students',
      'Database tracking for attendance history, session logs, and class records',
      'Deployed on homelab infrastructure with secure authentication flows'
    ],
    stats: {
      language: 'Python',
      status: 'Deployed'
    }
  },
  {
    id: 'mystudy-planner',
    name: 'MyStudy Planner & Workspace',
    tagline: 'Focused academic productivity dashboard for university students',
    description: 'A personal study workspace and planner designed to manage coursework, organize semester subject targets, track study sessions, and monitor academic progress with an intuitive, distraction-free interface.',
    category: 'frontend',
    categoryLabel: 'Frontend / Productivity',
    techStack: ['JavaScript', 'HTML5', 'Modern CSS', 'LocalStorage', 'Responsive UI'],
    githubUrl: 'https://github.com/Abir-droid/MyStudy-Planner',
    liveUrl: 'https://abirdroid.ddns.net/mystudy-planner',
    featured: true,
    badge: 'Academic Tool',
    highlights: [
      'Task prioritization, deadline alerts, and study schedule organizer',
      'Modular dashboard design prioritizing keyboard navigation and ease of use',
      'Persistent local data synchronization with zero external overhead',
      'Deployed on personal server with accessible cross-device sync'
    ],
    stats: {
      language: 'JavaScript',
      status: 'Active'
    }
  },
  {
    id: 'complaint-management-system',
    name: 'Complaint Management System',
    tagline: 'Structured issue reporting and resolution workflow portal',
    description: 'A web-based complaint management application created to formalize grievance submission, ticket dispatching, categorized tracking, and resolution statuses for institutional departments.',
    category: 'fullstack',
    categoryLabel: 'Web Systems',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Backend Service', 'Relational DB'],
    githubUrl: 'https://github.com/Abir-droid/complaint-management-system',
    liveUrl: 'https://abirdroid.ddns.net/complaints',
    featured: true,
    badge: 'Workflow System',
    highlights: [
      'Structured lifecycle workflow: Pending, Under Review, and Resolved',
      'Category-based issue assignment and priority categorization',
      'Clean interface prioritizing clarity for both end-users and administrators'
    ],
    stats: {
      language: 'Web Stack',
      status: 'Live Demo'
    }
  },
  {
    id: 'tictactoe-go',
    name: 'Online Tic-Tac-Toe in Go',
    tagline: 'Concurrent online multiplayer game leveraging Golang backend',
    description: 'An exploration into Go backend development and concurrency. Implements an online multiplayer Tic-Tac-Toe game where players can join matches and play against each other with synchronized game states.',
    category: 'systems',
    categoryLabel: 'Go / Concurrency',
    techStack: ['Go (Golang)', 'Goroutines', 'WebSockets / HTTP', 'HTML5 Canvas/CSS'],
    githubUrl: 'https://github.com/Abir-droid/tictactoe',
    liveUrl: 'https://abirdroid.ddns.net/tictactoe/',
    featured: false,
    badge: 'Go Concurrency',
    highlights: [
      'Lightweight game state engine powered by Go concurrency primitives',
      'Zero-dependency fast binary execution on the server',
      'Instant room-based matchmaking and real-time board updates'
    ],
    stats: {
      language: 'Go',
      status: 'Deployed'
    }
  },
  {
    id: 'custom-omarchy',
    name: 'Custom Omarchy — Linux Setup & Dotfiles',
    tagline: 'Pre-customized Arch Linux environment and automated restore scripts',
    description: 'A personal collection of Arch Linux configuration files, package manifests, and automated shell scripts to rapidly recreate a customized developer desktop environment.',
    category: 'systems',
    categoryLabel: 'Linux / DevOps',
    techStack: ['Linux', 'Arch Linux', 'Bash', 'Systemd', 'Dotfiles'],
    githubUrl: 'https://github.com/Abir-droid/custom-omarchy',
    featured: false,
    badge: 'Arch Linux',
    highlights: [
      'Automated provisioning of developer dependencies and system configs',
      'Curated terminal setup with customized shells and fast shortcuts',
      'Reproducible system state for Arch-based workstations'
    ],
    stats: {
      language: 'Shell / Bash',
      status: 'Maintained'
    }
  },
  {
    id: 'algorithm-lab',
    name: 'Algorithm Lab Implementations',
    tagline: 'Core computer science algorithms and data structures in C',
    description: 'Academic laboratory repository containing implementations of classic algorithms: sorting (QuickSort, MergeSort), graph traversal (BFS, DFS), shortest path, dynamic programming, and data structures in pure C.',
    category: 'systems',
    categoryLabel: 'C / Algorithms',
    techStack: ['C', 'Data Structures', 'Algorithm Analysis', 'Memory Management'],
    githubUrl: 'https://github.com/Abir-droid/Algorithm-Lab',
    featured: false,
    badge: 'CS Fundamentals',
    highlights: [
      'Pointer-based graph and tree representations',
      'Empirical time complexity benchmarks and step traces',
      'Direct memory allocation with valgrind clean routines'
    ],
    stats: {
      language: 'C',
      status: 'Academic'
    }
  },
  {
    id: 'voice-assistant',
    name: 'Python Voice Assistant',
    tagline: 'Hands-free desktop assistant for Windows with voice recognition',
    description: 'A Python-based desktop voice assistant capable of processing speech commands to automate routine computer tasks: launching software, opening web searches, playing media, and reading system status.',
    category: 'python',
    categoryLabel: 'Python Automation',
    techStack: ['Python', 'SpeechRecognition', 'Pyttsx3', 'OS Automation'],
    githubUrl: 'https://github.com/Abir-droid/voice-assistant',
    featured: false,
    badge: 'Python Scripting',
    highlights: [
      'Voice command parser with natural fallback responses',
      'Automates desktop operations and browser interactions',
      'Offline-capable text-to-speech synthesis pipeline'
    ],
    stats: {
      language: 'Python',
      status: 'Open Source'
    }
  },
  {
    id: 'test-blogging',
    name: 'Test-Blogging Static Platform',
    tagline: 'Semantic web design study and responsive blog layout',
    description: 'An early frontend design project exploring clean typography, responsive layout techniques, and semantic web structure without heavy framework dependencies.',
    category: 'frontend',
    categoryLabel: 'Frontend Exploration',
    techStack: ['HTML5', 'CSS3', 'Responsive Design', 'Typography'],
    githubUrl: 'https://github.com/Abir-droid/Test-blogging',
    liveUrl: 'https://abirdroid.ddns.net/Blog',
    featured: false,
    badge: 'Frontend Study',
    highlights: [
      'Lightweight semantic HTML layout crafted for readability',
      'Zero external CSS library dependencies',
      'Hosted live on self-hosted domain'
    ],
    stats: {
      language: 'HTML / CSS',
      status: 'Live Demo'
    }
  }
];

export const beyondTheCode = [
  {
    id: '01',
    number: '01',
    title: 'Linux & Open Source',
    tagline: 'System-level depth, customization & command-line mastery',
    description: 'Arch Linux and Debian are not just operating systems to me—they are my primary daily development drivers. I immerse myself in understanding Unix philosophy, configuring window managers, crafting Bash automation scripts, and tweaking dotfiles. Exploring systemctl, kernel packages, and memory management gives me an appreciation for the software beneath modern frameworks.',
    tags: ['Arch Linux', 'Debian', 'Bash Scripting', 'Dotfiles', 'Systemd', 'CLI Workflows'],
    stat: 'Arch & Debian Daily Driver',
    color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentBorder: 'group-hover:border-accent-cyan/50',
    iconName: 'Terminal',
  },
  {
    id: '02',
    number: '02',
    title: 'Self-Hosting & Infrastructure',
    tagline: 'Personal home server, containerized apps & networking',
    description: 'I maintain a dedicated home server hosting real-world web applications at abirdroid.ddns.net. Working with Docker, Docker Compose, and Coolify has taught me practical DevOps: reverse proxy routing, SSL certificate management, DNS records, dynamic IP syncing, and port isolation. Running services on bare metal provides an intuitive understanding of networking that tutorials cannot teach.',
    tags: ['Home Server', 'Coolify PaaS', 'Docker Containers', 'Dynamic DNS', 'Reverse Proxy', 'Networking'],
    stat: 'Active Live Homelab @ abirdroid.ddns.net',
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentBorder: 'group-hover:border-emerald-500/50',
    iconName: 'Server',
  },
  {
    id: '03',
    number: '03',
    title: 'AI & Emerging Technologies',
    tagline: 'Local LLMs, autonomous tools & modern developer leverage',
    description: 'I actively experiment with open-weight models using Ollama and local runtimes, investigating how modern developers can harness AI models for code assistance, data extraction, and workflow automation while retaining privacy and local control. I continuously follow advancements in software development tools to build faster and smarter.',
    tags: ['Local LLMs', 'Ollama', 'Prompt Engineering', 'AI Tooling', 'Automation Pipelines'],
    stat: 'Local AI Runtimes & Pipelines',
    color: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    accentBorder: 'group-hover:border-accent-indigo/50',
    iconName: 'Cpu',
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: 'Present',
    role: 'BSc in Software Engineering',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    description: 'Pursuing a comprehensive curriculum spanning Software Architecture, Object-Oriented Design, Algorithm Design & Complexity, Database Systems, and Web Engineering.',
    keyLearnings: [
      'Data Structures & Algorithms in C',
      'Database Modeling & Relational Queries (MySQL)',
      'Software Requirements Engineering & Agile development',
      'Active collaboration on academic projects & team codebases'
    ],
    type: 'education',
  },
  {
    period: '2024 — Present',
    role: 'Homelab Infrastructure & Self-Hosting Deployment',
    institution: 'Personal Engineering Lab',
    location: 'Home Server (abirdroid.ddns.net)',
    description: 'Configured a personal home server from hardware up, establishing a production-style container playground running Docker and Coolify to host student utilities and experiments.',
    keyLearnings: [
      'Setup Dynamic DNS (DDNS) and secure reverse proxy routing',
      'Continuous deployment of web applications (ChatBox, QR Attendance, Planners)',
      'Network security, firewall configuration, and uptime monitoring'
    ],
    type: 'homelab',
  },
  {
    period: '2023 — 2024',
    role: 'Full-Stack & Systems Exploration',
    institution: 'Practical Project Building',
    location: 'Dhaka, Bangladesh',
    description: 'Began building end-to-end applications to solve everyday student problems: created the QR Attendance tracking system with Django, a WebRTC chat application, and custom desktop automation tools.',
    keyLearnings: [
      'Django backend architecture, ORM, and REST endpoints',
      'WebRTC audio/video call integration with real-time sockets',
      'Python automation and speech recognition scripts'
    ],
    type: 'development',
  },
  {
    period: '2022 — 2023',
    role: 'IT Club Member & Foundation in Programming',
    institution: 'NCPSC IT Club',
    location: 'Dhaka, Bangladesh',
    description: 'Participated in club assignments, programming problem sets, and foundational computing workshops that sparked my curiosity for software engineering and Linux customization.',
    keyLearnings: [
      'Introductory programming in C and JavaScript',
      'First steps with Linux environments and desktop customization (autobloom)',
      'Algorithmic problem solving and logic development'
    ],
    type: 'club',
  },
];
