import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Server, Send, Mail, Check, Copy, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TerminalHero } from './TerminalHero';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden">
      {/* Subtle atmospheric line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Personal Identity & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left min-w-0">

            {/* Personal Identity Header Badge */}
            <div className="inline-flex items-center gap-3.5 p-2 pr-4 rounded-2xl bg-surface-100/70 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20">
              {/* Framed Portrait */}
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-surface-300 shrink-0 shadow-md">
                <img
                  src="./profile.png"
                  alt="Md. Abirul Karim Sarkar"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-surface-500"></span>
                </span>
              </div>

              {/* Name & Title */}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-bold text-sm sm:text-base tracking-tight truncate">
                    Md. Abirul Karim Sarkar
                  </span>
                  <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 px-1.5 py-0.2 rounded">
                    @{personalInfo.handle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-0.5">
                  <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                  <span className="truncate">DIU Software Eng. · Dhaka, BD</span>
                </div>
              </div>
            </div>

            {/* Headline — unmistakably personal */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Curious developer,
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Android explorer &amp; systems tinkerer.
                </span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-light">
              I'm an aspiring software engineer at DIU in Dhaka who learns by building real things. Rather than boxing myself into one specialty, I work across platforms: developing <strong className="text-emerald-300 font-medium">native Android apps</strong>, building backends with <strong className="text-sky-300 font-medium">Django &amp; PostgreSQL</strong>, exploring <strong className="text-cyan-300 font-medium">15+ Linux distributions</strong>, and self-hosting services on bare metal.
            </p>

            {/* Core Domain Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-200/80 border border-emerald-500/25 text-xs font-mono text-emerald-300 shadow-sm">
                <span>📱</span> Android Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-200/80 border border-cyan-500/25 text-xs font-mono text-cyan-300 shadow-sm">
                <span>🐧</span> 15+ Linux Distros
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-200/80 border border-sky-500/25 text-xs font-mono text-sky-300 shadow-sm">
                <span>🐘</span> Django &amp; PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-200/80 border border-indigo-500/25 text-xs font-mono text-indigo-300 shadow-sm">
                <span>🏠</span> Self-Hosted Homelab
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/15 hover:border-accent-cyan/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2 hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Let's Connect</span>
              </a>

              {/* Quick email copy button */}
              <button
                onClick={handleCopyEmail}
                title="Click to copy email"
                className="px-4 py-3 rounded-xl border border-white/10 hover:border-accent-cyan/40 bg-surface-200/60 hover:bg-white/5 text-slate-300 hover:text-white text-xs font-mono transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    <span className="hidden sm:inline">{personalInfo.email}</span>
                    <Copy className="w-3 h-3 text-slate-500" />
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Homelab Status */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <a
                  href="https://github.com/Abir-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://t.me/Abirdroid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400/80 font-mono">
                <Server className="w-3 h-3" />
                <span>Homelab @ abirdroid.ddns.net</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal */}
          <div className="lg:col-span-5 w-full min-w-0 overflow-hidden">
            <TerminalHero />
          </div>

        </div>
      </div>
    </section>
  );
};
