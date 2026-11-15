import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Terminal, Database, Server, Cpu, Code2, Globe, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { techLandscapeItems } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';
import { TechItem } from '../types';

type CategoryFilter = 'all' | 'programming' | 'web' | 'databases' | 'os' | 'infra' | 'ai';

const CATEGORIES: { id: CategoryFilter; label: string; icon: any }[] = [
  { id: 'all', label: 'All Ecosystem', icon: Layers },
  { id: 'programming', label: 'Programming', icon: Code2 },
  { id: 'web', label: 'Web Technologies', icon: Globe },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'os', label: 'Operating Systems', icon: Terminal },
  { id: 'infra', label: 'Infrastructure', icon: Server },
  { id: 'ai', label: 'AI & Systems', icon: Cpu },
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
  const [selectedTech, setSelectedTech] = useState<TechItem>(techLandscapeItems[0]);

  const filteredItems = techLandscapeItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="landscape" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase">
              <span>05</span>
              <span>·</span>
              <span>Ecosystem Constellation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Technology Landscape
            </h2>
            <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
              Interactive map of tools, platforms, and environments I work with. Represented as tools of curiosity and experimentation — no fabricated proficiency percentages.
            </p>
          </div>

          {/* Operational Status Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {Object.entries(STATUS_STYLES).map(([status, style]) => (
              <span key={status} className={`px-3 py-1 rounded-lg border ${style.bg} ${style.text} ${style.border}`}>
                {status}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-3 border-b border-white/[0.08]">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-accent-cyan text-slate-950 font-bold shadow-lg shadow-accent-cyan/25 scale-[1.02]'
                    : 'bg-surface-200/90 text-slate-300 hover:text-white hover:bg-surface-100 border border-white/[0.08]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Interactive Visual Clusters (7 cols) + Detail Inspector (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Dynamic Visual Cluster (Fluid Badges & Pills) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-surface-200/60 backdrop-blur-xl">
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-5 flex items-center justify-between">
              <span>Interactive Nodes ({filteredItems.length})</span>
              <span className="text-accent-cyan font-medium">Click any tool to inspect</span>
            </div>

            {/* Fluid Visual Cluster Layout */}
            <motion.div layout className="flex flex-wrap gap-3">
              <AnimatePresence>
                {filteredItems.map((item) => {
                  const statusStyle = STATUS_STYLES[item.status] || STATUS_STYLES['Daily Driver'];
                  const isSelected = selectedTech?.name === item.name;

                  return (
                    <motion.button
                      key={item.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedTech(item)}
                      className={`group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                        isSelected
                          ? 'bg-surface-100 border-accent-cyan shadow-xl shadow-accent-cyan/15 scale-[1.03] ring-1 ring-accent-cyan/50'
                          : 'bg-surface-300/80 hover:bg-surface-300 border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-xl bg-surface-200 border border-white/10 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <SkillIcon name={item.name} size={18} />
                      </div>

                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white group-hover:text-accent-cyan transition-colors truncate">
                          {item.name}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed font-light">
              Technologies represent tools I actively build with, test in home servers, or study academically. No percentage rankings or arbitrary mastery ratings.
            </div>
          </div>

          {/* Technology Detail Inspector Drawer (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTech.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="p-7 sm:p-8 rounded-3xl border border-white/[0.08] bg-surface-200/95 backdrop-blur-xl shadow-2xl space-y-6"
              >
                {/* Header with high-res icon */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-surface-300 border border-white/15 flex items-center justify-center p-3 shadow-lg">
                      <SkillIcon name={selectedTech.name} size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {selectedTech.name}
                      </h3>
                      <span className="text-xs font-mono uppercase text-accent-cyan font-semibold">
                        Domain: {selectedTech.category}
                      </span>
                    </div>
                  </div>
                  
                  <span className={`text-xs font-mono px-3 py-1 rounded-lg border font-semibold ${STATUS_STYLES[selectedTech.status]?.bg} ${STATUS_STYLES[selectedTech.status]?.text} ${STATUS_STYLES[selectedTech.status]?.border}`}>
                    {selectedTech.status}
                  </span>
                </div>

                {/* Practical Role */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Role in Personal Stack
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {selectedTech.description}
                  </p>
                </div>

                {/* Actual Projects Used In */}
                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Verified Builds &amp; Repositories
                  </div>
                  <div className="space-y-2">
                    {selectedTech.projectsUsedIn.map((proj) => (
                      <div
                        key={proj}
                        className="flex items-center justify-between p-3 rounded-xl bg-surface-300/80 border border-white/5 text-xs font-mono text-slate-200"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span className="font-semibold text-white">{proj}</span>
                        </div>
                        <span className="text-slate-400 text-[11px]">Implemented</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-400/80 border border-white/5 text-xs font-mono text-slate-400 leading-relaxed">
                  Backed by concrete code in my GitHub repositories or active service deployments on my Debian home server.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
