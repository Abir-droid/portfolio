import React from 'react';
import { User, MapPin, GraduationCap, Server, Terminal, Sparkles, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>01 // PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering solutions from the ground up.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Passionate software engineering student bridging the gap between web applications and infrastructure.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl glass-card-glow p-6 border border-white/10 relative overflow-hidden group">
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400" />
              
              {/* Profile Image & Avatar */}
              <div className="relative flex flex-col items-center text-center pb-6 border-b border-white/10">
                <div className="relative mb-4">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-sky-400/40 via-indigo-500/20 to-transparent border border-white/10 shadow-xl shadow-black/40">
                    <img
                      src="https://avatars.githubusercontent.com/u/91276219?v=4"
                      alt="Md. Abirul Karim Sarkar"
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        // Fallback avatar icon if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-surface-100 border border-white/15 text-emerald-400 shadow-md">
                    <Terminal className="w-4 h-4 text-accent-cyan" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">{personalInfo.name}</h3>
                <p className="text-accent-cyan font-mono text-xs mt-0.5">@{personalInfo.handle}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Verified Quick Stats / Attributes */}
              <div className="pt-5 space-y-3 font-mono text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-300/80 border border-white/5">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-200 font-semibold">{personalInfo.degree}</div>
                    <div className="text-slate-400 text-[11px]">{personalInfo.university}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-300/80 border border-white/5">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-200 font-semibold">Arch Linux & Debian</div>
                    <div className="text-slate-400 text-[11px]">Daily driver development environments</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-surface-300/80 border border-white/5">
                  <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-200 font-semibold">Self-Hosted Homelab</div>
                    <div className="text-slate-400 text-[11px]">Docker · Coolify · abirdroid.ddns.net</div>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Learning & Projects
                </span>
                <span className="font-mono text-slate-400">Dhaka (GMT+6)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a software engineering student at <strong className="text-white">Daffodil International University (DIU)</strong> in Dhaka, Bangladesh. Rather than simply memorizing syntax or relying on high-level templates, I believe the best way to master computing is through <strong className="text-sky-300">practical construction</strong>: building real projects, breaking down how protocols operate, and solving authentic problems.
              </p>
              <p>
                My passion spans <strong className="text-white">full-stack web development</strong>—architecting clean Python/Django backends, writing interactive JavaScript applications, and structuring reliable relational databases. Beyond web interfaces, I have an equal fascination with <strong className="text-cyan-300">systems, Linux distributions (particularly Arch Linux and Debian), and containerization</strong>.
              </p>
              <p>
                To put theory into practice, I configured and operate my own <strong className="text-emerald-400">dedicated home server</strong>. Using Docker and Coolify, I host live applications like my real-time ChatBox and varsity QR Attendance tracker under <span className="font-mono text-xs text-slate-200 bg-white/5 px-2 py-0.5 rounded">abirdroid.ddns.net</span>. Managing real traffic, reverse proxies, and system maintenance gives me hands-on perspective rarely found in ordinary classroom lectures.
              </p>
            </div>

            {/* Core Values / Work Style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4">
              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-accent-cyan/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-2.5">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-white text-sm font-semibold">Practical First</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Building functional apps to solidify concepts rather than theoretical tutorials alone.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-accent-cyan/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="text-white text-sm font-semibold">System Depth</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Embracing Linux internals, CLI automation, and networking fundamentals.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/5 hover:border-accent-cyan/30 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-white text-sm font-semibold">Curious & Adaptive</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Continuously testing new tools, Go concurrency, and local AI model pipelines.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
