import React from 'react';
import { Github, Linkedin, Terminal, ArrowUp, Send, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface-500/80 backdrop-blur-md pt-12 pb-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/5">
          {/* Brand & Identity */}
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
              <p className="text-xs text-slate-400 mt-0.5">
                Software Engineering Undergrad · Daffodil International University
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 rounded-xl bg-surface-200/80 hover:bg-surface-100 border border-white/10 hover:border-accent-cyan/30 text-slate-300 hover:text-accent-cyan transition-all text-xs flex items-center gap-1.5"
              >
                {link.name === 'GitHub' && <Github className="w-4 h-4" />}
                {link.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                {link.name === 'Telegram' && <Send className="w-4 h-4" />}
                <span className="font-mono hidden sm:inline">{link.name}</span>
              </a>
            ))}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Return to top of page"
              className="p-2 rounded-xl bg-surface-200 hover:bg-surface-100 border border-white/10 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Designed & built with curiosity</span>
            <span className="text-slate-400">·</span>
            <span className="text-sky-400">Dhaka, Bangladesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
