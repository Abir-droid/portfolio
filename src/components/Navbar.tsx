import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Projects', href: '#projects' },
  { name: 'Beyond Code', href: '#beyond' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['about', 'arsenal', 'projects', 'beyond', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-2xl shadow-black/40 border border-white/10 px-5 py-3'
            : 'bg-surface-500/40 backdrop-blur-md border border-white/5 px-5 py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-slate-100 font-mono text-sm group"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-200 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 transition-colors">
              <Terminal className="w-4 h-4 text-accent-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-white flex items-center gap-1.5">
                Abir-droid
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 font-sans tracking-wide">
                DIU · Software Eng.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/Abir-droid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-surface-200/80 border border-white/10 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-surface-200/80 border border-white/10 text-slate-300 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold hover:opacity-95 shadow-lg shadow-sky-500/20 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-surface-200/80 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl glass-panel border border-white/10 p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-accent-cyan hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Abir-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-200 border border-white/10 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-abirul-karim-sarkar-bb5246428"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface-200 border border-white/10 text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-semibold shadow-md"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
