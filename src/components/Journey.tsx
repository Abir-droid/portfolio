import React from 'react';
import { GraduationCap, Server, Code, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

const milestoneIcons: Record<string, React.ReactNode> = {
  education: <GraduationCap className="w-4 h-4 text-sky-400" />,
  homelab: <Server className="w-4 h-4 text-emerald-400" />,
  development: <Code className="w-4 h-4 text-indigo-400" />,
  club: <Award className="w-4 h-4 text-amber-400" />,
};

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>05 // TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Education at Daffodil International University, homelab milestones, and continuous technical growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-surface-200 border border-white/20 flex items-center justify-center shadow-md group-hover:border-accent-cyan transition-colors">
                {milestoneIcons[milestone.type] || <Code className="w-3.5 h-3.5 text-accent-cyan" />}
              </div>

              {/* Card */}
              <div className="rounded-2xl glass-card-glow p-6 border border-white/10 hover:border-accent-cyan/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 inline-block mb-1.5">
                      {milestone.period}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {milestone.role}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-slate-400 flex flex-col sm:items-end">
                    <span className="text-slate-200 font-medium">{milestone.institution}</span>
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      {milestone.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Key Learnings List */}
                <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Core Focus & Learnings
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {milestone.keyLearnings.map((learning, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
