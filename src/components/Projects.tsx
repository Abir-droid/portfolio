import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  Server, 
  Layers, 
  Code2, 
  Eye, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Full-Stack & Realtime', value: 'fullstack' },
  { label: 'Python & Django', value: 'python' },
  { label: 'Systems & Linux', value: 'systems' },
  { label: 'Frontend', value: 'frontend' },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Crafted Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic applications, web systems, and tools built from scratch and verified in public GitHub repositories.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-100/70 p-1.5 rounded-xl border border-white/5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-card-glow border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-950/20"
            >
              <div>
                {/* Visual Header / Terminal Preview Banner */}
                <div className="bg-gradient-to-b from-surface-100 to-surface-300 p-5 border-b border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="text-[11px] font-mono text-slate-400 ml-2">
                        {project.id}.app
                      </span>
                    </div>

                    {project.badge && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/25">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Mock Preview Content */}
                  <div className="rounded-lg bg-surface-400/90 p-3.5 border border-white/5 font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/5">
                      <span>Stack: {project.techStack.slice(0, 3).join(' · ')}</span>
                      {project.liveUrl ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Homelab Live
                        </span>
                      ) : (
                        <span className="text-slate-400">Open Source</span>
                      )}
                    </div>
                    <div className="pt-2 text-[11px] text-sky-300/90 truncate">
                      $ git clone {project.githubUrl}.git
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-mono text-accent-cyan mb-1 uppercase tracking-wider">
                      {project.categoryLabel}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-slate-400 hover:text-white p-1 rounded-md"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </h3>
                    <p className="text-xs text-sky-300 font-mono mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-accent-cyan font-mono">→</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-200 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white text-xs font-mono flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-sky-500/20 hover:opacity-95 transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-mono text-slate-400 hover:text-accent-cyan transition-colors"
                  >
                    Details & Architecture →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects on GitHub CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl glass-panel border border-white/10 shadow-xl">
            <div className="text-left">
              <h4 className="text-white text-sm font-bold">Want to explore all my repositories?</h4>
              <p className="text-slate-400 text-xs mt-0.5 font-mono">
                Explore algorithms, Windows scripts (autobloom), manhwa automation, and labs on my public profile.
              </p>
            </div>
            <a
              href="https://github.com/Abir-droid?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/15 text-white text-xs font-mono flex items-center gap-2 transition-all shrink-0 hover:border-accent-cyan/40"
            >
              <Github className="w-4 h-4 text-accent-cyan" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
