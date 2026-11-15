import React from 'react';
import { Terminal, Server, Code, MapPin, GraduationCap, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">01 · Profile & Background</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 max-w-2xl leading-tight">
            Engineering solutions<br />
            <span className="text-slate-400 font-light">from the ground up.</span>
          </h2>
        </div>

        {/* Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT: Portrait */}
          <div className="relative flex flex-col items-start">
            {/* Portrait frame */}
            <div className="relative w-full max-w-sm">
              {/* Accent glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-transparent rounded-3xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 aspect-[4/5]">
                <img
                  src="/profile.png"
                  alt="Md. Abirul Karim Sarkar"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                  onError={(e) => {
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-surface-200 flex flex-col items-center justify-center gap-3">
                        <div class="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500/30 to-indigo-500/30 border border-white/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <span class="text-slate-400 text-xs font-mono">Md. Abirul Karim Sarkar</span>
                      </div>
                    `;
                  }}
                />
                {/* Subtle dark overlay at bottom for readability */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-500/80 to-transparent" />
                {/* Name tag overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg tracking-tight">{personalInfo.name}</div>
                  <div className="text-accent-cyan font-mono text-xs mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              {/* Floating info cards alongside portrait */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <GraduationCap className="w-4 h-4 text-sky-400 mb-1.5" />
                  <div className="text-white text-xs font-semibold leading-tight">BSc Software Engineering</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Daffodil Int. University</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <Server className="w-4 h-4 text-emerald-400 mb-1.5" />
                  <div className="text-white text-xs font-semibold leading-tight">Homelab Online</div>
                  <div className="text-emerald-400 text-[11px] mt-0.5 font-mono">abirdroid.ddns.net</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="space-y-8 pt-2">
            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                I'm a software engineering student at <strong className="text-white">Daffodil International University (DIU)</strong> in Dhaka, Bangladesh. I believe the best way to master computing is through building real things — not just tutorials.
              </p>
              <p>
                My work spans <strong className="text-sky-300">full-stack web development</strong> with Python and Django backends, JavaScript frontends, and relational databases. Beyond the web layer, I'm equally fascinated by systems: running <strong className="text-cyan-300">Arch Linux and Debian</strong> as my daily drivers, writing Bash automation, and understanding how software meets hardware.
              </p>
              <p>
                I operate a personal <strong className="text-emerald-400">home server</strong> at <span className="font-mono text-xs text-slate-200 bg-white/5 px-2 py-0.5 rounded">abirdroid.ddns.net</span>, deploying real applications with Docker and Coolify — giving me hands-on DevOps experience that classroom lectures rarely provide.
              </p>
            </div>

            {/* Principles — editorial list, no cards */}
            <div className="pt-4 border-t border-white/8 space-y-5">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">How I approach engineering</span>
              <div className="space-y-4">
                {[
                  { icon: <Code className="w-4 h-4 text-sky-400" />, title: 'Practical First', desc: 'Real projects expose edge cases that no tutorial ever mentions.' },
                  { icon: <Terminal className="w-4 h-4 text-cyan-400" />, title: 'Understand the System', desc: 'From kernel to web request — knowing the layers makes me a better developer.' },
                  { icon: <Cpu className="w-4 h-4 text-indigo-400" />, title: 'Stay Curious', desc: 'Go concurrency, local LLMs, Arch configs — curiosity is the engine.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 rounded-lg bg-surface-200/60 border border-white/8 shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-slate-400 text-sm mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
