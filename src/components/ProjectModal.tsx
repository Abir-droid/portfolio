import React from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Server, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-surface-300 border border-white/15 rounded-2xl shadow-2xl overflow-hidden glass-card-glow max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-surface-200/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">{project.name}</h3>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-sky-300 font-mono">{project.tagline}</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Highlights & Architecture</h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-surface-400/60 p-2.5 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-200 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats / Details */}
          {project.stats && (
            <div className="p-3 rounded-xl bg-surface-400/50 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Primary Language: <strong className="text-white">{project.stats.language || 'N/A'}</strong></span>
              <span>Status: <strong className="text-emerald-400">{project.stats.status || 'Active'}</strong></span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-surface-200/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-surface-100 hover:bg-white/10 border border-white/15 text-white text-xs font-medium flex items-center gap-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-medium flex items-center gap-2 shadow-lg shadow-sky-500/20 hover:opacity-95 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Close Esc
          </button>
        </div>
      </div>
    </div>
  );
};
