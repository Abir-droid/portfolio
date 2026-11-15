import React from 'react';
import { Terminal, Server, Code, MapPin, GraduationCap, Smartphone, Disc, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">01 · Profile &amp; Background</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 max-w-2xl leading-tight">
            Learning without boundaries,<br />
            <span className="text-slate-400 font-light">building across the stack.</span>
          </h2>
        </div>

        {/* Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT: Portrait & Fast Highlights */}
          <div className="relative flex flex-col items-start w-full">
            {/* Portrait frame */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              {/* Accent glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-transparent rounded-3xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 aspect-[4/5]">
                <img
                  src="./profile.png"
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
                    Dhaka, Bangladesh · DIU
                  </div>
                </div>
              </div>

              {/* Floating info cards alongside portrait */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <Smartphone className="w-4 h-4 text-emerald-400 mb-1" />
                  <div className="text-white text-xs font-semibold leading-tight">Android Developer</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-mono">@Abir-droid Origin</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <Disc className="w-4 h-4 text-cyan-400 mb-1" />
                  <div className="text-white text-xs font-semibold leading-tight">15+ Linux Distros</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Tested &amp; Configured</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-sky-400 mb-1" />
                  <div className="text-white text-xs font-semibold leading-tight">PostgreSQL &amp; Django</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Relational Backends</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/8 backdrop-blur-sm">
                  <Server className="w-4 h-4 text-indigo-400 mb-1" />
                  <div className="text-white text-xs font-semibold leading-tight">Home Server Online</div>
                  <div className="text-emerald-400 text-[11px] mt-0.5 font-mono">abirdroid.ddns.net</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative */}
          <div className="space-y-7 pt-2">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <p>
                I am a software engineering undergraduate at <strong className="text-white font-medium">Daffodil International University (DIU)</strong> in Dhaka, Bangladesh. Rather than locking myself into one narrow specialty early on, I am driven by the thrill of discovering how technology works across its many dimensions.
              </p>
              <p>
                My work spans <strong className="text-emerald-300 font-medium">Android app development</strong> — which inspired my developer identity as <span className="font-mono text-accent-cyan bg-white/5 px-1.5 py-0.5 rounded">@Abir-droid</span> — alongside full-stack engineering with <strong className="text-sky-300 font-medium">Python, Django, and PostgreSQL</strong>.
              </p>
              <p>
                I am equally passionate about systems: I have hopped through and tested <strong className="text-cyan-300 font-medium">15 to 20 different Linux distributions</strong>, customizing Arch Linux and Debian as daily drivers, writing shell scripts, and exploring kernel parameters and systemd services.
              </p>
              <p>
                To put theory into practice, I operate a dedicated <strong className="text-white font-medium">home server</strong> at <span className="font-mono text-xs text-slate-200 bg-white/5 px-2 py-0.5 rounded">abirdroid.ddns.net</span> running containerized applications via Docker and Coolify.
              </p>
            </div>

            {/* Principles — editorial list */}
            <div className="pt-4 border-t border-white/8 space-y-4">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">How I approach engineering</span>
              <div className="space-y-3.5">
                {[
                  {
                    icon: <Smartphone className="w-4 h-4 text-emerald-400" />,
                    title: 'Multi-Disciplinary Exploration',
                    desc: 'Android apps, backend architectures, databases, and systems — learning broadly builds stronger architectural intuition.'
                  },
                  {
                    icon: <Terminal className="w-4 h-4 text-cyan-400" />,
                    title: 'System-Level Curiosity',
                    desc: 'Hopping 15+ distros and mastering the CLI taught me how software, kernels, and memory actually cooperate.'
                  },
                  {
                    icon: <Server className="w-4 h-4 text-indigo-400" />,
                    title: 'Hands-on Deployment',
                    desc: 'Hosting applications on bare metal with Docker and PostgreSQL turns academic concepts into production-grade experience.'
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="mt-0.5 p-2 rounded-lg bg-surface-200/60 border border-white/8 shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-relaxed">{item.desc}</div>
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
