import React from 'react';
import { Terminal, Smartphone, Server } from 'lucide-react';
import { beyondTheCode } from '../data/portfolioData';

const icons = [
  <Terminal className="w-5 h-5" />,
  <Smartphone className="w-5 h-5" />,
  <Server className="w-5 h-5" />,
];

const accentColors = [
  { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', glow: 'bg-cyan-500' },
  { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'bg-emerald-500' },
  { text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'bg-indigo-500' },
];

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-accent-cyan uppercase">04 · Core Passions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3 max-w-2xl leading-tight">
            Learning across<br />
            <span className="text-slate-400 font-light">the entire computing spectrum.</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl text-sm sm:text-base leading-relaxed font-light">
            I don't confine myself to one silo. These are the core exploration areas that shape how I build software.
          </p>
        </div>

        {/* 3 large editorial feature rows */}
        <div className="space-y-0">
          {beyondTheCode.map((item, idx) => {
            const color = accentColors[idx];
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 border-t border-white/8 items-start"
              >
                {/* Number — large editorial */}
                <div className={`lg:col-span-1 ${isEven ? '' : 'lg:order-last'}`}>
                  <span className="text-5xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors font-mono select-none">
                    {item.number}
                  </span>
                </div>

                {/* Icon block */}
                <div className={`lg:col-span-1 ${isEven ? '' : 'lg:order-first'}`}>
                  <div className={`w-12 h-12 rounded-2xl ${color.bg} border ${color.border} ${color.text} flex items-center justify-center`}>
                    {icons[idx]}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 min-w-0">
                  <h3 className={`text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 group-hover:${color.text} transition-colors`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm font-mono mb-3 ${color.text}`}>{item.tagline}</p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                    {item.description}
                  </p>
                </div>

                {/* Tags — right side */}
                <div className="lg:col-span-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg ${color.bg} border ${color.border} ${color.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
