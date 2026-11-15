import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Terminal, ExternalLink, Github, Server } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'intro', label: 'Intro' },
  { id: 'activity', label: 'Activity' },
  { id: 'builds', label: 'Builds' },
  { id: 'systems', label: 'Systems Lab' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  // Thin scroll progress indicator at top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const scrollPos = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Thin Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-surface-400/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 px-4 sm:px-5 py-2.5'
              : 'bg-surface-500/50 backdrop-blur-md border border-white/5 px-4 sm:px-5 py-3'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo / Brand */}
            <a href="#intro" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-surface-200 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:border-accent-cyan/50 transition-colors">
                <Terminal className="w-4 h-4 text-accent-cyan" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white flex items-center gap-1.5 text-sm sm:text-base">
                  {personalInfo.name}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wide -mt-0.5">
                  @{personalInfo.handle} · DIU
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-surface-300/60 p-1 rounded-xl border border-white/5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-accent-cyan/20 text-accent-cyan font-semibold border border-accent-cyan/30 shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Status & Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={personalInfo.homelabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface-300/60 border border-white/5 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                title="Personal Debian Server"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>abirdroid.ddns.net</span>
              </a>

              <a
                href="https://github.com/Abir-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-300/80 hover:bg-surface-200 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-surface-300/80 border border-white/10 text-slate-300 hover:text-white transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 p-4 rounded-2xl bg-surface-400/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-2 max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-mono text-center transition-all ${
                    activeSection === item.id
                      ? 'bg-accent-cyan/20 text-accent-cyan font-bold border border-accent-cyan/30'
                      : 'bg-surface-300/60 text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <a
                href="https://github.com/Abir-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-accent-cyan"
              >
                <Github className="w-4 h-4" />
                <span>@Abir-droid</span>
              </a>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Server Online
              </span>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};
