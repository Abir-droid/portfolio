import { Project, SkillCategory, JourneyMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: 'Md. Abirul Karim Sarkar',
  shortName: 'Abir',
  handle: 'Abir-droid',
  role: 'Software Engineering Student · Multi-Disciplinary Developer',
  university: 'Daffodil International University (DIU)',
  degree: 'BSc in Software Engineering',
  location: 'Dhaka, Bangladesh',
  bioHeadline: 'Curious developer, Android explorer & systems tinkerer.',
  bioIntro: "I'm Abir, a software engineering student at DIU. Rather than boxing myself into one specialty, I'm an active learner working across platforms — developing Android apps, exploring 15+ Linux distributions, crafting Django & PostgreSQL backends, and self-hosting services on bare metal.",
  aboutParagraphs: [
    "I am an aspiring software engineer and student at Daffodil International University in Dhaka, Bangladesh. Rather than restricting myself to a single narrow stack, I approach computing with wide curiosity — actively exploring mobile app development, backend architectures, relational databases, and operating system mechanics.",
    "My exploration spans diverse domains: I have built native Android applications (the true inspiration behind my handle, @Abir-droid), developed full-stack web applications with Python, Django, and PostgreSQL/MySQL, and hopped through 15–20 Linux distributions — configuring custom Arch Linux environments, Debian workstations, and containerized servers.",
    "On my personal home server at abirdroid.ddns.net, I self-host Docker containers with Coolify, manage PostgreSQL databases, configure dynamic DNS, and experiment with bare-metal networking. As an eager learner, I thrive on understanding how every layer of software works from client interfaces down to the operating system."
  ],
  status: 'SOFTWARE ENGINEERING STUDENT · DIU, BANGLADESH',
  homelabStatus: 'ONLINE · abirdroid.ddns.net',
  email: 'aksarker2019@gmail.com',
  fallbackEmail: 'aksarker2019@gmail.com',
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
    title: 'Mobile & Web Development',
    subtitle: 'Multi-platform application architecture',
    iconName: 'Layers',
    skills: [
      { name: 'Android Development', level: 'proficient', details: 'Native Android app design, lifecycle, UI architecture, mobile UX' },
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
      { name: 'PostgreSQL', level: 'proficient', details: 'Relational data modeling, complex queries, transactions, ORM integration' },
      { name: 'MySQL', level: 'proficient', details: 'Relational schema design, indexing, SQL queries' },
      { name: 'SQLite', level: 'proficient', details: 'Lightweight local storage, prototyping, lab databases' },
    ],
  },
  {
    title: 'Systems & Infrastructure',
    subtitle: 'Operating environments and deployment',
    iconName: 'Server',
    skills: [
      { name: 'Linux (15+ Distros Explored)', level: 'proficient', details: 'Arch, Debian, Fedora, Ubuntu & more — package managers, systemd, kernel configs' },
      { name: 'Docker', level: 'proficient', details: 'Containerization, Dockerfile recipes, compose files' },
      { name: 'Coolify', level: 'proficient', details: 'Self-hosted PaaS management for web applications' },
      { name: 'Home Server & Networking', level: 'proficient', details: 'Dynamic DNS, reverse proxies, port routing, bare metal' },
      { name: 'Git & Version Control', level: 'proficient', details: 'Branching, remotes, CI/CD, collaborative workflows' },
      { name: 'Bash', level: 'proficient', details: 'Shell automation, custom dotfiles, system maintenance scripts' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'chatbox',
    name: 'ChatBox',
    tagline: 'Real-time WebRTC audio/video and WebSocket chat',
    description: 'A self-hosted, full-featured web communication platform supporting real-time text messaging, peer-to-peer audio calls, and video streaming using modern WebRTC standards. Built without heavy third-party SaaS dependencies and actively deployed on my personal home server.',
    category: 'fullstack',
    categoryLabel: 'Real-Time Communications',
    techStack: ['JavaScript', 'WebRTC', 'WebSockets', 'HTML5', 'CSS3', 'Docker'],
    githubUrl: 'https://github.com/Abir-droid/chatbox',
    liveUrl: 'https://abirdroid.ddns.net/chatbox',
    featured: true,
    highlights: [
      'Peer-to-peer audio and video calling powered by WebRTC RTCPeerConnection',
      'Low-latency full-duplex text communication via WebSocket channels',
      'Self-contained architecture with zero external paid third-party dependencies',
      'Production deployment on home server with Coolify container orchestration'
    ],
    architecture: 'Browser client initiates WebSocket handshake for signaling, establishes WebRTC mesh for direct P2P media streams, falling back to STUN for NAT traversal.',
    learnings: 'Deepened my understanding of ICE candidates, NAT traversal, audio/video stream codecs, and real-time event loops in modern browsers.',
  },
  {
    id: 'qr-attendance',
    name: 'QR Attendance System',
    tagline: 'Automated student presence tracking with dynamic QR validation',
    description: 'A web-based attendance automation system engineered with Django. Eliminates manual roll calls by generating time-sensitive dynamic QR codes that students scan to log attendance instantly, complete with a teacher management dashboard and reporting.',
    category: 'fullstack',
    categoryLabel: 'Academic Automation',
    techStack: ['Python', 'Django', 'PostgreSQL', 'SQLite', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Abir-droid/qr-attendance',
    liveUrl: 'https://abirdroid.ddns.net/qrattendance/',
    featured: true,
    highlights: [
      'Time-based rolling QR code token generation to prevent fraudulent scans',
      'Role-based access control separating teacher portals from student interfaces',
      'Real-time attendance computation and automated summary statistics',
      'Live deployment on personal server infrastructure'
    ],
    architecture: 'Django MTV pattern backed by relational database; dynamic QR tokens generated per session with cryptographic expiration timestamps.',
    learnings: 'Mastered Django ORM relationship modeling, authentication middleware, and securing time-sensitive verification tokens.',
  },
  {
    id: 'mystudy-planner',
    name: 'MyStudy-Planner',
    tagline: 'Interactive academic scheduling and task management dashboard',
    description: 'A focused, responsive web application designed to help university students organize class timetables, track assignment deadlines, and manage daily study priorities with persistent state and an intuitive visual workflow.',
    category: 'frontend',
    categoryLabel: 'Productivity Tool',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Responsive Design'],
    githubUrl: 'https://github.com/Abir-droid/MyStudy-Planner',
    liveUrl: 'https://abirdroid.ddns.net/mystudy-planner',
    featured: true,
    highlights: [
      'Weekly timetable visualization with dynamic subject block placement',
      'Task deadline tracker with urgency color-coding and completion filters',
      'Fully responsive layout optimized for mobile study sessions and desktop desks',
      'Self-hosted deployment on personal homelab server'
    ],
    architecture: 'Vanilla JavaScript client architecture with clean modular separation for state management, DOM rendering, and local persistence.',
    learnings: 'Reinforced DOM lifecycle optimization, responsive CSS grid/flexbox techniques, and accessible keyboard navigation patterns.',
  },
  {
    id: 'complaint-management-system',
    name: 'Complaint Management System',
    tagline: 'Structured issue reporting and resolution workflow portal',
    description: 'A comprehensive campus complaint management portal designed to streamline grievance submission, status tracking, and administrative resolution. Built to demonstrate structured database-driven workflow management.',
    category: 'fullstack',
    categoryLabel: 'Workflow Systems',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP / MySQL'],
    githubUrl: 'https://github.com/Abir-droid/complaint-management-system',
    liveUrl: 'https://abirdroid.ddns.net/complaint-management-system',
    featured: true,
    highlights: [
      'End-to-end ticket lifecycle: Open, Under Review, Escalated, Resolved',
      'Category-based complaint routing to appropriate university departments',
      'Student tracking portal with real-time status updates and resolution logs'
    ],
    architecture: 'Multi-role web portal with authentication gating, relational schema for audit logs, and status transition validation.',
    learnings: 'Gained practical experience in administrative role separation, relational data modeling, and workflow state machines.',
  },
  {
    id: 'tictactoe-go',
    name: 'Tic-Tac-Toe in Go',
    tagline: 'Concurrent CLI game engine built with Golang',
    description: 'An interactive command-line board game built in Go to explore the language\'s syntax, strong static typing, pointer semantics, clean package modularity, and memory management mechanics.',
    category: 'systems',
    categoryLabel: 'Systems & Algorithms',
    techStack: ['Go (Golang)', 'CLI', 'Game Logic', 'Unit Testing'],
    githubUrl: 'https://github.com/Abir-droid/tictactoe',
    featured: false,
    highlights: [
      'Clean idiomatic Go codebase organized with packages and strict type definitions',
      'Board validation algorithms detecting win/draw conditions in minimal steps',
      'Interactive terminal input handling with validation and game replay loops'
    ],
    architecture: 'Modular Go package architecture with decoupled board state engine, input reader, and terminal renderer.',
    learnings: 'Firsthand appreciation for Go\'s clean error handling philosophy, fast compiler toolchain, and type-safe memory safety.',
  },
  {
    id: 'custom-omarchy',
    name: 'Custom Omarchy Linux Dotfiles',
    tagline: 'Minimalist Arch Linux configuration and workflow automation',
    description: 'A curated personal configuration repository for Arch Linux, encapsulating shell customizations, lightweight window manager setups, keybindings, and automation scripts tailored for focused developer productivity.',
    category: 'systems',
    categoryLabel: 'Linux Customization',
    techStack: ['Arch Linux', 'Bash', 'Zsh / Fish', 'Linux Dotfiles', 'Systemd'],
    githubUrl: 'https://github.com/Abir-droid/custom-omarchy',
    featured: false,
    highlights: [
      'Reproducible system setup scripts for fast installation on fresh Arch installs',
      'Customized shell environments with productivity aliases and git integrations',
      'Lightweight status bar configurations and dynamic workspace management'
    ],
    architecture: 'Symlink-based dotfile management with modular install scripts and environment-specific overrides.',
    learnings: 'In-depth mastery of the Linux CLI, package manager hooks, POSIX shell scripting, and tailoring developer environments for speed.',
  },
];

export const beyondTheCode = [
  {
    id: '01',
    number: '01',
    title: '15+ Linux Distros & System Internals',
    tagline: 'Deep dive into 15–20 distributions, kernels & Unix philosophy',
    description: 'My enthusiasm for Linux goes far beyond simple desktop use. I have tested and hopped across 15 to 20 Linux distributions — analyzing package managers (pacman, apt, dnf), testing desktop environments and window managers, writing Bash automation, and fine-tuning systemd services and kernel parameters. This hands-on exploration gives me an intuitive grasp of operating systems that modern high-level abstractions often obscure.',
    tags: ['15+ Distros Hopped', 'Arch Linux', 'Debian', 'Bash Automation', 'Dotfiles', 'Systemd'],
    stat: '15–20 Distros Explored',
    color: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentBorder: 'group-hover:border-accent-cyan/50',
    iconName: 'Terminal',
  },
  {
    id: '02',
    number: '02',
    title: 'Android & Mobile App Development',
    tagline: 'Native mobile interfaces, app architecture & device integration',
    description: 'Mobile development is a foundational pillar of my journey — inspiring my developer identity as @Abir-droid. I develop Android applications with a focus on intuitive user interfaces, efficient background execution, and mobile system APIs. Working with mobile constraints has taught me discipline in resource management, asynchronous events, and touch UX.',
    tags: ['Android Apps', 'Mobile Dev', 'Java / Kotlin', 'UI/UX Architecture', 'Device APIs'],
    stat: 'Native Android Apps Built',
    color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentBorder: 'group-hover:border-emerald-500/50',
    iconName: 'Smartphone',
  },
  {
    id: '03',
    number: '03',
    title: 'Self-Hosting, Databases & Homelab',
    tagline: 'Personal home server, PostgreSQL, Docker & networking',
    description: 'I maintain a dedicated home server hosting real-world web applications at abirdroid.ddns.net. Running Docker containers, managing PostgreSQL databases, configuring reverse proxy routing, and handling dynamic DNS on bare metal provides an irreplaceable foundation in real-world DevOps.',
    tags: ['Home Server', 'PostgreSQL', 'Coolify PaaS', 'Docker Containers', 'Dynamic DNS'],
    stat: 'Active Live Homelab @ abirdroid.ddns.net',
    color: 'from-indigo-500/20 via-purple-500/10 to-transparent',
    accentBorder: 'group-hover:border-accent-indigo/50',
    iconName: 'Server',
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
      'Database Modeling & Relational Queries (PostgreSQL & MySQL)',
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
      'PostgreSQL & MySQL database administration on bare metal',
      'Network security, firewall configuration, and uptime monitoring'
    ],
    type: 'homelab',
  },
  {
    period: '2023 — 2024',
    role: 'Android, Full-Stack & Linux Exploration',
    institution: 'Practical Project Building',
    location: 'Dhaka, Bangladesh',
    description: 'Began building end-to-end applications: developed native Android apps, created the QR Attendance tracking system with Django & databases, built a WebRTC chat app, and hopped across 15+ Linux distributions.',
    keyLearnings: [
      'Android app architecture, XML layouts, and mobile lifecycle',
      'Django backend architecture, ORM, and PostgreSQL integration',
      'Deep dive into 15–20 Linux distributions and shell automation',
      'WebRTC audio/video call integration with real-time sockets'
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
      'First steps with Linux environments and desktop customization',
      'Algorithmic problem solving and logic development'
    ],
    type: 'club',
  },
];
