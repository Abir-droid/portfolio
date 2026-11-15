import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';

export const Arsenal: React.FC = () => {
  return (
    <section id="arsenal" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">02 · Skills &amp; Tools</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 leading-tight">
              Technical Arsenal
            </h2>
          </div>
          <div className="flex items-center gap-5 text-xs font-mono text-slate-400 shrink-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />Core Proficiency
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />Learning
            </span>
          </div>
        </div>

        {/* Category rows */}
        <div className="space-y-0">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="py-6 border-t border-white/8 first:border-t-0"
            >
              {/* Category label */}
              <div className="mb-4">
                <h3 className="text-sm font-bold text-white tracking-tight">{category.title}</h3>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{category.subtitle}</p>
              </div>

              {/* Skill icon pills — wrap freely */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isProficient = skill.level === 'proficient';
                  return (
                    <div
                      key={skill.name}
                      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default
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
                      {/* Tech icon */}
                      <span className="shrink-0 flex items-center">
                        <SkillIcon name={skill.name} size={16} />
                      </span>

                      <span className="text-sm font-medium text-slate-200 whitespace-nowrap">{skill.name}</span>

                      {!isProficient && (
                        <span className="text-[9px] font-mono text-amber-400/70 ml-0.5 shrink-0">↑</span>
                      )}

                      {/* Tooltip on hover */}
                      {skill.details && (
                        <div className="absolute bottom-full left-0 mb-2 w-52 p-2.5 rounded-lg bg-surface-100 border border-white/15 text-[11px] text-slate-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl leading-relaxed">
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
