import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Server, 
  Terminal, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-sky-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
};

export const Arsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="arsenal" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
              <span>02 // SKILLS & TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Languages, frameworks, and infrastructure tools verified through practical project repositories and homelab setups.
            </p>
          </div>

          {/* Level Legend */}
          <div className="flex items-center gap-4 text-xs font-mono bg-surface-100/70 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md self-start md:self-auto">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>Proficient / Core</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Exploring & Learning</span>
            </div>
          </div>
        </div>

        {/* Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl glass-card-glow p-6 border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface-200/90 border border-white/10 group-hover:border-accent-cyan/40 transition-colors">
                      {iconMap[category.iconName] || <Code2 className="w-5 h-5 text-accent-cyan" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                      <p className="text-slate-400 text-xs">{category.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {category.skills.length}
                  </span>
                </div>

                {/* Skills Badges & Details */}
                <div className="pt-4 space-y-2.5">
                  {category.skills.map((skill) => {
                    const isProficient = skill.level === 'proficient';
                    return (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-surface-300/60 hover:bg-surface-200 border border-white/5 hover:border-white/15 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isProficient ? 'bg-accent-cyan shadow-[0_0_8px_rgba(56,189,248,0.6)]' : 'bg-amber-400'
                              }`}
                            />
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                              isProficient
                                ? 'bg-sky-500/10 text-sky-300 border-sky-500/20'
                                : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                            }`}
                          >
                            {isProficient ? 'Proficient' : 'Exploring'}
                          </span>
                        </div>
                        {skill.details && (
                          <p className="text-[11px] text-slate-400 mt-1 font-mono pl-3.5 leading-snug">
                            {skill.details}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Card Footnote */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verified in repos & homelab</span>
                <span className="text-accent-cyan">● active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note Banner */}
        <div className="mt-8 p-4 rounded-xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-300">
              <strong className="text-white">Continuous Evolution:</strong> I distinguish between technologies I actively use daily and emerging tools I am exploring like Go concurrency and local Ollama runtimes.
            </p>
          </div>
          <a
            href="https://github.com/Abir-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-accent-cyan hover:underline shrink-0 flex items-center gap-1"
          >
            <span>View commit history on GitHub</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
