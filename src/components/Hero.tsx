import React from 'react';
import { ArrowRight, Github, Linkedin, Server, Send, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TerminalHero } from './TerminalHero';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden">
      {/* Section atmospheric line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Identity pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-100/60 border border-white/10 backdrop-blur-md">
              {/* Tiny avatar */}
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20 shrink-0">
                <img src="/profile.png" alt="Abir" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display='none'; }} />
              </div>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">{personalInfo.status}</span>
            </div>

            {/* Main Heading — stronger hierarchy */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Building ideas
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  into reality.
                </span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg font-light">
              I'm <strong className="text-white font-semibold">Abir</strong> — a software engineering student from Dhaka, Bangladesh. I build full-stack web apps, run my own homelab, and live in the terminal.
            </p>

            {/* Focus tags — more editorial, no card boxes */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />Python · Django
              </span>
              <span className="text-white/10">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />Arch Linux · Debian
              </span>
              <span className="text-white/10">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Docker · Coolify
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl border border-white/15 hover:border-accent-cyan/50 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all flex items-center gap-2 hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social strip — editorial style, no boxes */}
            <div className="pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-5 text-xs font-mono text-slate-400">
                <a href="https://github.com/Abir-droid" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />GitHub
                </a>
                <a href="https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />LinkedIn
                </a>
                <a href="https://t.me/Abirdroid" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Send className="w-3.5 h-3.5" />Telegram
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/80 font-mono">
                <Server className="w-3 h-3" />
                <span>Homelab Online · abirdroid.ddns.net</span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal */}
          <div className="lg:col-span-5 w-full">
            <TerminalHero />
          </div>

        </div>
      </div>
    </section>
  );
};
