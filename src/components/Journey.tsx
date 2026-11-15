import React from 'react';
import { GraduationCap, Server, Code, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

const milestoneIcons = {
  education: <GraduationCap className="w-4 h-4 text-sky-400" />,
  homelab: <Server className="w-4 h-4 text-emerald-400" />,
  development: <Code className="w-4 h-4 text-indigo-400" />,
  club: <Award className="w-4 h-4 text-amber-400" />,
};

const milestoneColors = {
  education: 'border-sky-500/40 bg-sky-500/5',
  homelab: 'border-emerald-500/40 bg-emerald-500/5',
  development: 'border-indigo-500/40 bg-indigo-500/5',
  club: 'border-amber-500/40 bg-amber-500/5',
};

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">05 · Timeline</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
            My Journey
          </h2>
          <p className="text-slate-400 mt-3 max-w-md text-base">
            Education, homelab milestones, and continuous technical growth — only verified events.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-white/10 to-transparent" />

          <div className="space-y-10 pl-14">
            {journeyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className={`absolute -left-[42px] top-1.5 w-9 h-9 rounded-xl border flex items-center justify-center ${milestoneColors[milestone.type]} shadow-sm`}>
                  {milestoneIcons[milestone.type]}
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/8 self-start">
                      {milestone.period}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      {milestone.location}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors">
                    {milestone.role}
                  </h3>
                  <p className="text-slate-400 text-sm mt-0.5 mb-3">{milestone.institution}</p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  {/* Key learnings as simple list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {milestone.keyLearnings.map((learning, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
