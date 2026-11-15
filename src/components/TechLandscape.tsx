import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Terminal, Database, Server, Cpu, Sparkles, Code2, Globe, Check, ExternalLink } from 'lucide-react';
import { techLandscapeItems } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';
import { TechItem } from '../types';

type CategoryFilter = 'all' | 'programming' | 'web' | 'databases' | 'os' | 'infra' | 'ai';

const CATEGORIES: { id: CategoryFilter; label: string; icon: any }[] = [
  { id: 'all', label: 'All Ecosystem', icon: Layers },
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'web', label: 'Web Dev', icon: Globe },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'os', label: 'Operating Systems', icon: Terminal },
  { id: 'infra', label: 'Infrastructure', icon: Server },
  { id: 'ai', label: 'AI & Automation', icon: Cpu },
];

const STATUS_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  'Daily Driver': { bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30' },
  'Active Project': { bg: 'bg-cyan-500/15', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  'Production Deployed': { bg: 'bg-sky-500/15', text: 'text-sky-300', border: 'border-sky-500/30' },
  'Lab Tested': { bg: 'bg-indigo-500/15', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  'Exploring': { bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30' },
};

export const TechLandscape: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(techLandscapeItems[0]);

  const filteredItems = techLandscapeItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="landscape" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase">
              <span>05</span>
              <span>·</span>
              <span>Ecosystem Constellation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Technology Landscape
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base leading-relaxed">
              Interactive map of tools and environments I actively use. Classified by genuine operational status — zero arbitrary percentage ratings.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-slate-400">
            {Object.entries(STATUS_STYLES).map(([status, style]) => (
              <span key={status} className={`px-2.5 py-1 rounded-md border ${style.bg} ${style.text} ${style.border}`}>
                {status}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent-cyan text-slate-950 font-bold shadow-lg shadow-accent-cyan/20 scale-[1.02]'
                    : 'bg-surface-200/80 text-slate-300 hover:text-white hover:bg-surface-200 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Visual Tech Clusters (8 cols) + Tech Detail Inspector (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Clusters Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <AnimatePresence>
              {filteredItems.map((item) => {
                const statusStyle = STATUS_STYLES[item.status] || STATUS_STYLES['Daily Driver'];
                const isSelected = selectedTech?.name === item.name;

                return (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedTech(item)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-surface-100 border-accent-cyan shadow-xl shadow-accent-cyan/10 scale-[1.02]'
                        : 'bg-surface-200/60 hover:bg-surface-200 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-300/80 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                          <SkillIcon name={item.name} size={22} />
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>{item.projectsUsedIn.length} verified builds</span>
                      <span className="text-accent-cyan group-hover:translate-x-0.5 transition-transform">Inspect →</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Technology Detail Inspector */}
          <div className="lg:col-span-4 sticky top-28">
            {selectedTech ? (
              <motion.div
                key={selectedTech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-surface-200/90 backdrop-blur-xl shadow-2xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-surface-300 border border-white/15 flex items-center justify-center p-2.5">
                      <SkillIcon name={selectedTech.name} size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {selectedTech.name}
                      </h3>
                      <span className="text-[11px] font-mono uppercase text-slate-400">
                        {selectedTech.category}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${STATUS_STYLES[selectedTech.status]?.bg} ${STATUS_STYLES[selectedTech.status]?.text} ${STATUS_STYLES[selectedTech.status]?.border}`}>
                    {selectedTech.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Role in Ecosystem
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    {selectedTech.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Actual Projects &amp; Implementations
                  </div>
                  <div className="space-y-1.5">
                    {selectedTech.projectsUsedIn.map((proj) => (
                      <div
                        key={proj}
                        className="flex items-center gap-2 p-2 rounded-lg bg-surface-300/80 border border-white/5 text-xs font-mono text-slate-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        <span>{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface-400/80 border border-white/5 text-[11px] font-mono text-slate-400 leading-normal">
                  Every technology shown here is backed by actual code in my GitHub repositories or running on my personal Debian server.
                </div>
              </motion.div>
            ) : (
              <div className="p-8 rounded-3xl border border-white/10 bg-surface-200/50 text-center text-slate-400 text-xs font-mono">
                Click any technology node to inspect its project connections.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
