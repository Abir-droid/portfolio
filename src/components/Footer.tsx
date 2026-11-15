import React from 'react';
import { Github, Linkedin, Terminal, ArrowUp, Send, Facebook, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface-500/90 backdrop-blur-md pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface-200 border border-white/10 flex items-center justify-center text-accent-cyan shadow-sm">
              <Terminal className="w-4 h-4 text-accent-cyan" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-1.5 py-0.2 rounded">
                  @{personalInfo.handle}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Software Engineering Student · Independent Builder
              </p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-200/80 hover:bg-surface-100 border border-white/10 hover:border-accent-cyan/30 text-slate-300 hover:text-accent-cyan transition-all text-xs flex items-center gap-1.5 font-mono"
              >
                {link.name === 'GitHub' && <Github className="w-3.5 h-3.5" />}
                {link.name === 'LinkedIn' && <Linkedin className="w-3.5 h-3.5" />}
                {link.name === 'Telegram' && <Send className="w-3.5 h-3.5" />}
                {link.name === 'Facebook' && <Facebook className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            ))}

            <button
              onClick={scrollToTop}
              title="Return to top"
              className="p-2.5 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/10 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            Built with React, TypeScript &amp; Framer Motion · Deployed on Debian Homelab
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>abirdroid.ddns.net</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
