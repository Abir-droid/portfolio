import { Project, TechItem, InfrastructureNode, JourneyMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: 'Abirul Karim',
  fullName: 'Md. Abirul Karim Sarkar',
  handle: 'Abir-droid',
  tagline: 'Software Engineering Student, Independent Builder & Technology Enthusiast.',
  university: 'Daffodil International University (DIU)',
  degree: 'BSc in Software Engineering',
  location: 'Dhaka, Bangladesh',
  bioShort: 'Software engineering student at Daffodil International University. Building practical applications, configuring Linux systems, and running bare-metal containerized services on a Debian home server.',
  homelabUrl: 'https://abirdroid.ddns.net',
  homelabHost: 'abirdroid.ddns.net',
  homelabStatus: 'ONLINE · Bare Metal Debian Server',
  email: 'aksarker2019@gmail.com',
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
    name: 'Telegram',
    url: 'https://t.me/Abirdroid',
    iconName: 'Send',
    label: 't.me/Abirdroid',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/abirul.karim',
    iconName: 'Facebook',
    label: 'facebook.com/abirul.karim',
  },
];

export const projects: Project[] = [
  {
    id: 'chatbox',
    name: 'ChatBox',
    tagline: 'Self-hosted WebRTC peer-to-peer audio/video & WebSocket messaging platform.',
    description: 'A full-featured real-time communication platform engineered without third-party proprietary APIs. Uses WebSocket signaling for real-time duplex chat and WebRTC RTCPeerConnection for encrypted browser-to-browser media streams. Containerized with Docker and actively running on my home server.',
    category: 'fullstack',
    categoryLabel: 'Real-Time Systems',
    techStack: ['WebRTC', 'WebSockets', 'JavaScript', 'Node.js', 'Docker', 'Debian'],
    githubUrl: 'https://github.com/Abir-droid/chatbox',
    liveUrl: 'https://abirdroid.ddns.net/chatbox',
    featured: true,
    badge: 'Flagship Build',
    highlights: [
      'P2P RTCPeerConnection audio and video streaming with STUN NAT traversal',
      'Sub-50ms duplex text messaging over persistent WebSocket signaling channels',
      'Zero external SaaS runtime dependencies — completely self-contained',
      'Containerized with multi-stage Dockerfile and deployed via Coolify PaaS'
    ],
    architecture: 'WebSocket handshake handles session signaling and ICE candidate exchange; clients establish direct peer-to-peer WebRTC media mesh with STUN fallback.',
    learnings: 'Hands-on mastery of ICE negotiation states, browser media constraint pipelines, and low-latency duplex event loops.',
    deploymentInfo: 'Docker container on Debian bare metal · Traefik reverse proxy · SSL via Let\'s Encrypt'
  },
  {
    id: 'qr-attendance',
    name: 'QR Attendance System',
    tagline: 'Automated university attendance with rolling cryptographic QR verification.',
    description: 'A web-based attendance automation system engineered with Django and PostgreSQL. Eliminates manual roll calls by generating time-expiring rolling QR codes that students scan to log attendance instantly, paired with role-gated teacher portals and reporting analytics.',
    category: 'fullstack',
    categoryLabel: 'Academic Automation',
    techStack: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Abir-droid/qr-attendance',
    liveUrl: 'https://abirdroid.ddns.net/qrattendance/',
    featured: true,
    badge: 'Deployed System',
    highlights: [
      'Time-based rolling QR tokens with cryptographic expiration to prevent proxy scans',
      'Role-based access control separating teacher portals from student scanner interfaces',
      'Relational PostgreSQL schema tracking real-time attendance statistics and course records',
      'Live deployment on personal Debian server infrastructure'
    ],
    architecture: 'Django MTV pattern backed by PostgreSQL; dynamic QR tokens generated per session with cryptographic expiration timestamps.',
    learnings: 'Mastered Django ORM relationship modeling, authentication middleware, and securing time-sensitive verification tokens.',
    deploymentInfo: 'Gunicorn WSGI daemon · PostgreSQL 16 · Dockerized on homelab'
  },
  {
    id: 'tictactoe-go',
    name: 'Tic-Tac-Toe in Go',
    tagline: 'Concurrent game engine and online web implementation built with Golang.',
    description: 'An interactive game engine engineered in Go to explore concurrent goroutines, strict type safety, memory pointers, and modular package architecture. Includes both terminal engine mechanics and an active online web interface.',
    category: 'systems',
    categoryLabel: 'Systems & Concurrency',
    techStack: ['Go (Golang)', 'Goroutines', 'WebSockets', 'HTML5/CSS3', 'Unit Testing'],
    githubUrl: 'https://github.com/Abir-droid/tictactoe',
    liveUrl: 'https://abirdroid.ddns.net/tictactoe/',
    featured: true,
    badge: 'Compiled Engine',
    highlights: [
      'Idiomatic Go codebase organized with strict type definitions and clean package separation',
      'Optimized board state evaluation detecting victory or draw in minimal CPU cycles',
      'Lightweight HTTP server serving real-time board updates with sub-millisecond latency',
      'Tested with Go unit test suites covering edge game conditions'
    ],
    architecture: 'Decoupled Go engine package handling board state transitions, served via standard library net/http server.',
    learnings: 'Firsthand appreciation for Go\'s concurrency primitives, pointer semantics, and standalone binary compilation.',
    deploymentInfo: 'Compiled Go binary running as a managed systemd service / container'
  },
  {
    id: 'custom-omarchy',
    name: 'Custom Omarchy Linux Dotfiles',
    tagline: 'Reproducible Arch Linux workstation environment & system automation.',
    description: 'A curated personal configuration repository for Arch Linux, encapsulating shell customizations, lightweight window manager setups, keybindings, and automation scripts tailored for focused developer productivity.',
    category: 'systems',
    categoryLabel: 'Linux Customization',
    techStack: ['Arch Linux', 'Bash', 'Zsh', 'Systemd', 'Pacman Hooks', 'Dotfiles'],
    githubUrl: 'https://github.com/Abir-droid/custom-omarchy',
    featured: true,
    badge: 'System Architecture',
    highlights: [
      'Reproducible system setup scripts for fast installation on fresh Arch installs',
      'Customized shell environments with productivity aliases and git integrations',
      'Lightweight status bar configurations and dynamic workspace management'
    ],
    architecture: 'Symlink-based dotfile management with modular install scripts and environment-specific overrides.',
    learnings: 'In-depth mastery of the Linux CLI, package manager hooks, POSIX shell scripting, and tailoring developer environments for speed.',
    deploymentInfo: 'Active daily driver configuration on personal developer workstation'
  },
  {
    id: 'complaint-management-system',
    name: 'Campus Complaint Management',
    tagline: 'Role-based grievance routing and structured resolution lifecycle portal.',
    description: 'A comprehensive campus grievance resolution portal designed to streamline complaint logging, department assignment, and administrative tracking. Built to explore multi-role database state transitions and audit logging.',
    category: 'fullstack',
    categoryLabel: 'Workflow Systems',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/Abir-droid/complaint-management-system',
    liveUrl: 'https://abirdroid.ddns.net/complaints',
    featured: true,
    badge: 'Workflow Portal',
    highlights: [
      'End-to-end grievance lifecycle: Submitted → Assigned → Under Investigation → Resolved',
      'Department-based ticket routing to academic and campus administration offices',
      'Student tracking portal with real-time status updates and resolution logs'
    ],
    architecture: 'Multi-role web portal with authentication gating, relational schema for audit logs, and status transition validation.',
    learnings: 'Gained practical experience in administrative role separation, relational data modeling, and workflow state machines.',
    deploymentInfo: 'Nginx + PHP-FPM containerized stack on Debian homelab'
  },
  {
    id: 'voice-assistant',
    name: 'Voice Assistant & Automation',
    tagline: 'Desktop speech recognition and automated system task execution.',
    description: 'A Python-powered desktop assistant built to parse spoken audio commands, interact with operating system APIs, execute quick scripts, and automate daily routine tasks.',
    category: 'automation',
    categoryLabel: 'AI & Automation',
    techStack: ['Python', 'Speech Recognition', 'OS Automation', 'PyAudio', 'APIs'],
    githubUrl: 'https://github.com/Abir-droid/voice-assistant',
    featured: false,
    badge: 'Audio Automation',
    highlights: [
      'Real-time voice capture and keyword parsing using speech recognition pipelines',
      'System automation scripts for app launching, volume control, and web searches',
      'Modular intent dispatch architecture for adding custom command routines'
    ],
    architecture: 'PyAudio microphone stream feeds into speech recognition models; recognized text is dispatched through an intent parsing engine.',
    learnings: 'Explored audio stream buffering, microphone noise gating, and asynchronous OS command execution.',
    deploymentInfo: 'Desktop executable utility'
  }
];

export const infrastructureNodes: InfrastructureNode[] = [
  {
    id: 'internet',
    label: 'Public Internet & Clients',
    sublabel: 'Web browsers · Mobile devices · Remote connections',
    layer: 'edge',
    icon: 'Globe',
    status: 'ACTIVE',
    tech: 'IPv4 / IPv6 · HTTPS · WebSockets',
    description: 'External requests originating from mobile devices, browsers, and remote WebRTC peer connections.',
    spec: 'Encrypted TLS 1.3 · Port 80 & 443'
  },
  {
    id: 'ddns',
    label: 'Dynamic DNS & Edge Hostname',
    sublabel: 'abirdroid.ddns.net',
    layer: 'dns',
    icon: 'Radio',
    status: 'SYNCED',
    tech: 'No-IP DDNS Client · Automated IP Updater',
    description: 'Dynamic DNS client automatically tracks ISP dynamic IP changes and maps abirdroid.ddns.net to the server gateway.',
    spec: 'Sub-60s TTL update cycle'
  },
  {
    id: 'router',
    label: 'Gateway Router & NAT Firewall',
    sublabel: 'Port forwarding & Subnet isolation',
    layer: 'network',
    icon: 'ShieldCheck',
    status: 'SECURE',
    tech: 'NAT Table · Stateful Firewall · Port 80/443 Forwarding',
    description: 'Hardware firewall forwarding HTTP/HTTPS traffic to the Debian host while keeping internal LAN devices isolated.',
    spec: 'Dedicated internal static IP mapping'
  },
  {
    id: 'server',
    label: 'Debian Bare-Metal Home Server',
    sublabel: 'Debian 12 Bookworm · 24/7 Dedicated Host',
    layer: 'server',
    icon: 'Server',
    status: 'ONLINE',
    tech: 'Linux Kernel 6.x · Systemd · NVMe/SSD Storage',
    description: 'Physical server hardware running Debian 12 Bookworm. Manages kernel parameters, system services, and Docker daemon.',
    spec: 'Debian 12 x86_64 · 99.8% Personal Lab Uptime'
  },
  {
    id: 'orchestration',
    label: 'Coolify PaaS & Traefik Reverse Proxy',
    sublabel: 'Container orchestration & Automated SSL',
    layer: 'orchestration',
    icon: 'Cpu',
    status: 'HEALTHY',
    tech: 'Coolify Engine · Traefik Proxy · Let\'s Encrypt Auto-Renewal',
    description: 'Self-hosted PaaS orchestrating Docker containers with automatic Traefik SSL certificate termination and routing.',
    spec: 'Automated TLS Certificates · Zero-Downtime Reloads'
  },
  {
    id: 'app-chatbox',
    label: 'ChatBox Service',
    sublabel: 'WebRTC & WebSocket Messaging',
    layer: 'workload',
    icon: 'Video',
    status: 'RUNNING',
    tech: 'Docker Container · Node.js / WS · Port 3001',
    description: 'Handles real-time duplex communication, ICE candidate exchange, and P2P video stream handshakes.',
    spec: 'Internal Port 3001 → Traefik /chatbox'
  },
  {
    id: 'app-qr',
    label: 'QR Attendance App',
    sublabel: 'Django & Relational Backend',
    layer: 'workload',
    icon: 'QrCode',
    status: 'RUNNING',
    tech: 'Docker Container · Python 3.11 / Django · Port 8000',
    description: 'Generates time-expiring rolling QR tokens and handles student attendance scan authentication.',
    spec: 'Internal Port 8000 → Traefik /qrattendance'
  },
  {
    id: 'db-postgres',
    label: 'PostgreSQL 16 Engine',
    sublabel: 'Persistent Relational Database',
    layer: 'workload',
    icon: 'Database',
    status: 'PERSISTENT',
    tech: 'PostgreSQL 16 · Docker Volume on Bare Metal SSD',
    description: 'Stores relational tables, user auth records, and attendance histories with automated backup volumes.',
    spec: 'Dedicated volume storage · Internal bridge network'
  },
  {
    id: 'app-static',
    label: 'Web Utilities & Go Services',
    sublabel: 'Tic-Tac-Toe, Complaint Portal & Tools',
    layer: 'workload',
    icon: 'Layers',
    status: 'RUNNING',
    tech: 'Go Binary & Nginx Containers · Port 8080/8081',
    description: 'Runs lightweight Go game services, campus complaint tracking portal, and static utilities.',
    spec: 'Multi-service routing via subpaths'
  }
];

export const techLandscapeItems: TechItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'programming',
    status: 'Daily Driver',
    description: 'Primary language for backend architectures, automation scripts, and academic coursework.',
    projectsUsedIn: ['QR Attendance', 'Voice Assistant', 'Manhwa Downloader', 'Algorithm Implementations']
  },
  {
    name: 'Go (Golang)',
    category: 'programming',
    status: 'Active Project',
    description: 'High-performance concurrency, compiled binaries, and clean static type mechanics.',
    projectsUsedIn: ['Tic-Tac-Toe Engine', 'Microservices', 'Concurrency Experiments']
  },
  {
    name: 'JavaScript / TypeScript',
    category: 'programming',
    status: 'Daily Driver',
    description: 'Modern ES6+ frontend engineering, asynchronous event loops, and full-stack web applications.',
    projectsUsedIn: ['Portfolio App', 'ChatBox', 'Study Planner', 'Complaint Management']
  },
  {
    name: 'C',
    category: 'programming',
    status: 'Lab Tested',
    description: 'Foundational computer science, pointer arithmetic, memory management, and data structures.',
    projectsUsedIn: ['Algorithm-Lab', 'Academic DSA Coursework']
  },
  {
    name: 'Bash & Shell',
    category: 'programming',
    status: 'Daily Driver',
    description: 'System automation, cron routines, dotfile bootstrapping, and server deployment scripts.',
    projectsUsedIn: ['Custom Omarchy Dotfiles', 'Debian Server Scripts', 'Backup Automation']
  },

  // Web Development
  {
    name: 'Django',
    category: 'web',
    status: 'Production Deployed',
    description: 'MTV architecture, ORM query optimization, secure authentication, and RESTful endpoints.',
    projectsUsedIn: ['QR Attendance System', 'Academic Projects']
  },
  {
    name: 'WebRTC & WebSockets',
    category: 'web',
    status: 'Production Deployed',
    description: 'Peer-to-peer audio/video streaming, ICE candidate negotiation, and bidirectional WebSocket pipes.',
    projectsUsedIn: ['ChatBox Real-Time App']
  },
  {
    name: 'React & Tailwind CSS',
    category: 'web',
    status: 'Daily Driver',
    description: 'Component-driven UI, declarative state architectures, and fine-tuned responsive styling.',
    projectsUsedIn: ['Interactive Portfolio', 'Web Frontends']
  },
  {
    name: 'HTML5 & Modern CSS3',
    category: 'web',
    status: 'Daily Driver',
    description: 'Semantic markup, accessibility, CSS Grid, Flexbox, and smooth hardware-accelerated animations.',
    projectsUsedIn: ['All Web Projects', 'Study Planner', 'Complaint Portal']
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'databases',
    status: 'Production Deployed',
    description: 'Relational data modeling, ACID transactions, complex joins, and production server maintenance.',
    projectsUsedIn: ['QR Attendance System', 'Debian Home Server DB']
  },
  {
    name: 'MySQL',
    category: 'databases',
    status: 'Production Deployed',
    description: 'Relational schema design, normalization, foreign keys, and administrative web integrations.',
    projectsUsedIn: ['Complaint Management System', 'Academic Databases']
  },
  {
    name: 'SQLite',
    category: 'databases',
    status: 'Daily Driver',
    description: 'Zero-configuration embedded SQL engine for local prototypes, testing, and lightweight tooling.',
    projectsUsedIn: ['Local Testing', 'Rapid Prototypes']
  },

  // Operating Systems
  {
    name: 'Debian Linux',
    category: 'os',
    status: 'Production Deployed',
    description: '24/7 home server operating system running bare-metal services, Docker, and persistent storage.',
    projectsUsedIn: ['Home Server Host (abirdroid.ddns.net)', 'Coolify Server']
  },
  {
    name: 'Arch Linux',
    category: 'os',
    status: 'Daily Driver',
    description: 'Rolling-release workstation with custom pacman configs, bleeding-edge kernels, and tiling window managers.',
    projectsUsedIn: ['Custom Omarchy Dotfiles', 'Primary Workstation']
  },
  {
    name: '15+ Linux Distributions',
    category: 'os',
    status: 'Lab Tested',
    description: 'Hopped and evaluated Fedora, Ubuntu, Alpine, Manjaro, openSUSE, and more to understand OS packaging and systemd.',
    projectsUsedIn: ['Distro Exploration', 'OS Internals Research']
  },

  // Infrastructure
  {
    name: 'Docker & Compose',
    category: 'infra',
    status: 'Daily Driver',
    description: 'Containerization, multi-stage Dockerfiles, isolated bridge networking, and persistent volume mounts.',
    projectsUsedIn: ['ChatBox', 'QR Attendance', 'Home Server Containers']
  },
  {
    name: 'Coolify PaaS',
    category: 'infra',
    status: 'Production Deployed',
    description: 'Self-hosted PaaS platform for orchestrating web applications, health checks, and database containers.',
    projectsUsedIn: ['Personal Homelab Management']
  },
  {
    name: 'Traefik & Reverse Proxies',
    category: 'infra',
    status: 'Production Deployed',
    description: 'Dynamic request routing, automatic Let\'s Encrypt SSL/TLS certificates, and port multiplexing.',
    projectsUsedIn: ['Debian Homelab Gateway', 'SSL Termination']
  },
  {
    name: 'Git & GitHub',
    category: 'infra',
    status: 'Daily Driver',
    description: 'Branching strategies, commit hygiene, automated workflows, and code hosting.',
    projectsUsedIn: ['All 14 Repositories on @Abir-droid']
  },

  // AI & Experimentation
  {
    name: 'Local LLMs & Ollama',
    category: 'ai',
    status: 'Exploring',
    description: 'Running and prompting quantized open-source models locally on developer hardware for coding assistance.',
    projectsUsedIn: ['Local AI Experiments', 'CLI Tooling']
  },
  {
    name: 'Speech & Audio Processing',
    category: 'ai',
    status: 'Lab Tested',
    description: 'Audio capture, noise gating, speech-to-text recognition pipelines, and system event dispatching.',
    projectsUsedIn: ['Voice Assistant']
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: 'Present',
    role: 'BSc in Software Engineering',
    institution: 'Daffodil International University (DIU)',
    location: 'Dhaka, Bangladesh',
    description: 'Comprehensive software engineering curriculum covering Software Architecture, Algorithms & Complexity, Database Systems, and Object-Oriented Design.',
    keyLearnings: [
      'Data Structures & Algorithms in C',
      'Relational Database Modeling (PostgreSQL & MySQL)',
      'Software Requirements Engineering & Clean Architecture',
      'Collaborative team codebases & academic problem sets'
    ],
    type: 'education',
  },
  {
    period: '2024 — Present',
    role: 'Bare-Metal Homelab & Self-Hosting Infrastructure',
    institution: 'Personal Engineering Lab (abirdroid.ddns.net)',
    location: 'Debian Home Server',
    description: 'Engineered a 24/7 Debian home server from hardware up, implementing Dynamic DNS, Traefik reverse proxy, Docker containerization, and Coolify PaaS to host personal applications.',
    keyLearnings: [
      'Dynamic DNS configuration & automated IP synchronization',
      'Coolify PaaS & Traefik automated SSL termination',
      'PostgreSQL database administration on bare metal',
      'Port routing, subnet isolation, and uptime maintenance'
    ],
    type: 'homelab',
  },
  {
    period: '2023 — 2024',
    role: 'Practical Project Building & Linux Exploration',
    institution: 'Independent Engineering & Open Source',
    location: 'Dhaka, Bangladesh',
    description: 'Built end-to-end applications: developed the WebRTC ChatBox platform, created the QR Attendance tracking system with Django, and hopped across 15+ Linux distributions.',
    keyLearnings: [
      'WebRTC P2P audio/video streaming & WebSocket signaling',
      'Django MTV architecture, ORM queries, and auth flow',
      'Deep exploration of 15–20 Linux distributions & package managers',
      'Custom Arch Linux workstation tailoring & Bash automation'
    ],
    type: 'development',
  },
  {
    period: '2022 — 2023',
    role: 'IT Club Member & Foundations in Computing',
    institution: 'NCPSC IT Club',
    location: 'Dhaka, Bangladesh',
    description: 'Participated in club programming sets, logic building challenges, and introductory systems workshops that sparked my curiosity for software engineering.',
    keyLearnings: [
      'Introductory programming in C and JavaScript',
      'First steps with Linux environments & terminal commands',
      'Algorithmic problem solving and logic development'
    ],
    type: 'club',
  },
];
