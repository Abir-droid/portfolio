import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Eye, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

// Pick the 6 strongest verified projects
const featuredIds = ['chatbox', 'qr-attendance', 'mystudy-planner', 'complaint-management-system', 'tictactoe-go', 'custom-omarchy'];
const featuredProjects = projects.filter(p => featuredIds.includes(p.id));
const flagship = featuredProjects[0]; // chatbox is flagship
const rest = featuredProjects.slice(1);

const techColors: Record<string, string> = {
  'JavaScript': 'text-amber-300 bg-amber-500/10 border-amber-500/20',
  'Python': 'text-sky-300 bg-sky-500/10 border-sky-500/20',
  'Go (Golang)': 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  'Django': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  'Docker': 'text-blue-300 bg-blue-500/10 border-blue-500/20',
  'default': 'text-slate-300 bg-white/5 border-white/10',
};

function techBadge(tech: string) {
  const cls = techColors[tech] || techColors['default'];
  return (
    <span key={tech} className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${cls}`}>
      {tech}
    </span>
  );
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">03 · Crafted Projects</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
              Things I've built.
            </h2>
            <p className="text-slate-400 mt-3 max-w-md text-base">
              Real applications running live on my homelab — not demos. Every project is on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Abir-droid?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-accent-cyan transition-colors shrink-0 group"
          >
            <Github className="w-4 h-4" />
            All repos on GitHub
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* FLAGSHIP — full-width hero card */}
        <div className="mb-8 group relative rounded-2xl border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 overflow-hidden bg-gradient-to-br from-surface-100/80 to-surface-400/60 shadow-2xl">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-8 sm:p-10 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/25">
                    Flagship Project
                  </span>
                  {flagship.liveUrl && (
                    <span className="text-[11px] font-mono flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Homelab
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  {flagship.name}
                </h3>
                <p className="text-sky-300 font-mono text-sm mb-4">{flagship.tagline}</p>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {flagship.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {flagship.techStack.map(techBadge)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a href={flagship.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/15 text-sm font-semibold text-white flex items-center gap-2 transition-all">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                {flagship.liveUrl && (
                  <a href={flagship.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-sky-500/20 hover:opacity-95 transition-all">
                    Live Demo <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Terminal preview panel */}
            <div className="relative bg-surface-400/80 border-l border-white/8 p-5 sm:p-7 font-mono text-xs flex flex-col justify-center min-h-[240px] overflow-hidden">
              <div className="flex items-center gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="text-slate-400 ml-2 text-[11px]">chatbox · runtime</span>
              </div>
              <div className="space-y-2.5 text-slate-300">
                <div><span className="text-accent-cyan">$</span> docker ps --filter name=chatbox</div>
                <div className="pl-3 text-emerald-400">Container: abir-chatbox — Up 14 days</div>
                <div><span className="text-accent-cyan">$</span> cat features.md</div>
                <div className="pl-3 space-y-1 text-slate-300">
                  <div>→ Real-time WebSocket messaging</div>
                  <div>→ Peer-to-peer audio/video (WebRTC)</div>
                  <div>→ Self-hosted, zero third-party dependency</div>
                  <div>→ Mobile-responsive progressive web app</div>
                </div>
                <div className="pt-2 text-slate-500 text-[11px]">— Deployed via Coolify · abirdroid.ddns.net/chatbox</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest: 2-column grid with varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 overflow-hidden bg-gradient-to-br from-surface-100/50 to-surface-400/40 flex flex-col"
            >
              {/* Card header bar */}
              <div className="bg-surface-200/60 px-5 py-3.5 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">{project.id}</span>
                </div>
                {project.liveUrl && (
                  <span className="text-[10px] font-mono flex items-center gap-1 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="mb-1 text-xs font-mono text-accent-cyan uppercase tracking-wider">{project.categoryLabel}</div>
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-sky-300 font-mono mb-3">{project.tagline}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map(techBadge)}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors">
                    <Github className="w-3.5 h-3.5" /> Source
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:text-white transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  ) : (
                    <button onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-accent-cyan transition-colors">
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Abir-droid?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 hover:border-accent-cyan/40 text-slate-300 hover:text-white text-sm font-mono transition-all hover:bg-white/5 group"
          >
            <Github className="w-4 h-4 text-accent-cyan" />
            View All Projects on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
