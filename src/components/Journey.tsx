import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Server, Code, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { journeyMilestones, personalInfo } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'homelab': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'development': return <Code className="w-5 h-5 text-sky-400" />;
      case 'club': return <Users className="w-5 h-5 text-amber-400" />;
      default: return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className="py-28 lg:py-36 relative overflow-hidden bg-surface-500/60">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase">
            <span>06</span>
            <span>·</span>
            <span>Background &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Academic &amp; Engineering Path
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            {personalInfo.bioShort}
          </p>
        </div>

        {/* Visual Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyMilestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline marker icon */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-11 h-11 rounded-2xl bg-surface-200 border border-white/15 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-accent-cyan/50 transition-all duration-300">
                {getIcon(item.type)}
              </div>

              {/* Milestone Card */}
              <div className="p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-surface-200/70 hover:bg-surface-200/95 transition-all duration-300 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 w-fit font-semibold">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5">
                  {item.role}
                </h3>
                
                <div className="text-sm sm:text-base font-mono text-accent-cyan mb-4 font-medium">
                  {item.institution}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                {/* Key Learnings Tags */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 font-semibold">
                    Key Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {item.keyLearnings.map((learning, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-surface-400/80 border border-white/5 text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{learning}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
