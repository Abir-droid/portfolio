import React from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Sparkles, Server, Globe, Download, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TerminalHero } from './TerminalHero';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-100/80 border border-white/10 backdrop-blur-md text-xs font-mono tracking-wide text-slate-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">{personalInfo.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building ideas into <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              I'm <strong className="text-white font-semibold">Abir</strong>, a software engineering student passionate about building web applications, exploring systems, and turning ideas into working software.
            </p>

            {/* Focus Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-md bg-surface-200/90 border border-white/10 text-sky-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Python & Django
              </span>
              <span className="px-3 py-1 rounded-md bg-surface-200/90 border border-white/10 text-cyan-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Linux (Arch / Debian)
              </span>
              <span className="px-3 py-1 rounded-md bg-surface-200/90 border border-white/10 text-emerald-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Docker & Self-Hosting
              </span>
            </div>

            {/* Prominent CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-600 text-white font-medium text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-surface-200/80 hover:bg-surface-100 border border-white/10 hover:border-accent-cyan/40 text-slate-200 hover:text-white font-medium text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social & Homelab Status Strip */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Abir-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-accent-cyan transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href="https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-accent-cyan transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href="https://t.me/Abirdroid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-accent-cyan transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>

              {/* Homelab badge */}
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/90 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <Server className="w-3 h-3 text-emerald-400" />
                <span>Homelab Server Active</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Terminal Graphic */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <TerminalHero />
          </div>

        </div>
      </div>
    </section>
  );
};
