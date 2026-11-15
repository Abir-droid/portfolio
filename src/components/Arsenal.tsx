import React from 'react';
import { skillCategories } from '../data/portfolioData';

export const Arsenal: React.FC = () => {
  return (
    <section id="arsenal" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">02 · Skills & Tools</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
              Technical Arsenal
            </h2>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />Core Proficiency
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />Actively Learning
            </span>
          </div>
        </div>

        {/* Editorial table layout — no cards */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 border-t border-white/8 first:border-t-0">

              {/* Category label column */}
              <div className="md:col-span-3">
                <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{category.subtitle}</p>
              </div>

              {/* Skills column — horizontal pills, editorial */}
              <div className="md:col-span-9 flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const isProficient = skill.level === 'proficient';
                  return (
                    <div
                      key={skill.name}
                      className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-default
                        hover:border-accent-cyan/40 hover:bg-white/5"
                      style={{
                        background: isProficient
                          ? 'rgba(14, 20, 34, 0.7)'
                          : 'rgba(10, 13, 22, 0.5)',
                        borderColor: isProficient
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          isProficient
                            ? 'bg-accent-cyan shadow-[0_0_6px_rgba(56,189,248,0.6)]'
                            : 'bg-amber-400'
                        }`}
                      />
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      {!isProficient && (
                        <span className="text-[10px] font-mono text-amber-400/70 ml-0.5">learning</span>
                      )}

                      {/* Tooltip on hover */}
                      {skill.details && (
                        <div className="absolute bottom-full left-0 mb-2 w-52 p-2.5 rounded-lg bg-surface-100 border border-white/15 text-[11px] text-slate-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-xl leading-relaxed">
                          {skill.details}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
