# Md. Abirul Karim Sarkar — Developer Portfolio

A personal developer portfolio website designed and engineered for **Md. Abirul Karim Sarkar** (Abir-droid) — Software Engineering Student at Daffodil International University (DIU), full-stack web developer, Linux enthusiast, and homelab self-hoster.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** featuring a **premium dark futuristic aesthetic** inspired by Linear, Vercel, and high-end developer websites.

---

## 🌟 Key Features

- **Futuristic Dark Aesthetic**: Charcoal/near-black palette (`#07090e`), electric cyan and indigo atmospheric glows, subtle grid textures, and glassmorphic surfaces.
- **Interactive Terminal Hero**: Features tabbed terminal commands (`neofetch`, `docker ps`, `cat philosophy.md`) with copyable snippets reflecting his Arch Linux and homelab experience.
- **Verified GitHub Research**: Built around authentic public repositories (`chatbox`, `qr-attendance`, `MyStudy-Planner`, `complaint-management-system`, `tictactoe`, `custom-omarchy`), with live links to his personal home server (`abirdroid.ddns.net`).
- **Interactive Project Showcase**: Filterable by stack (Full-Stack, Python & Django, Systems & Linux, Frontend), with detailed modal overlays, live demo links, and GitHub source links.
- **Technical Arsenal**: Categorized skills with visual indicators distinguishing core proficient tools from actively explored technologies (Go, local LLMs).
- **Beyond the Code**: 3 distinct focus cards highlighting:
  1. Linux & Open Source (Arch Linux & Debian daily driver)
  2. Self-Hosting & Infrastructure (Dedicated home server, Docker, Coolify PaaS, DDNS)
  3. AI & Emerging Technologies (Local LLMs via Ollama, AI-assisted development)
- **Minimalist Journey Timeline**: Authentic milestones covering Software Engineering studies at Daffodil International University, homelab infrastructure deployment, and IT club beginnings.
- **Contact & Communication**: Working contact form with validation, email copy button with visual feedback, and direct social channels (Telegram, LinkedIn, GitHub, Facebook).
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop screens with smooth scrolling, semantic HTML, and SEO metadata.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler & Tooling**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or newer)
- npm or pnpm

### 2. Run Locally in Development
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be placed in the `/dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy on Coolify / Self-Hosted Home Server
Since you already run Coolify at `abirdroid.ddns.net`:
1. Push this repository to GitHub: `https://github.com/Abir-droid/portfolio`.
2. In Coolify, create a new **Static Application** or **Docker Service**.
3. Point build directory to `/dist` and build command to `npm run build`.
4. Configure domain (e.g., `portfolio.abirdroid.ddns.net` or root domain).

### Deploy to Vercel / Cloudflare Pages / Netlify
1. Connect your GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`

---

## 📄 License
Designed & built with curiosity for **Md. Abirul Karim Sarkar**. Free to customize and distribute.
