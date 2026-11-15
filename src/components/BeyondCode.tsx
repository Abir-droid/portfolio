import React from 'react';
import { Terminal, Server, Cpu, ArrowUpRight, CheckCircle, Shield, Network, Bot } from 'lucide-react';
import { beyondTheCode } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>04 // BEYOND ORDINARY WEB DEV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            What sets me apart: deep curiosity for operating systems, self-hosted bare metal infrastructure, and exploring local AI.
          </p>
        </div>

        {/* 3 Large Visual Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {beyondTheCode.map((item) => {
            const isLinux = item.id === '01';
            const isHomelab = item.id === '02';
            const isAI = item.id === '03';

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl glass-card-glow p-7 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Atmospheric Glow in background */}
                <div
                  className={`absolute -top-24 -right-24 w-52 h-52 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                    isLinux
                      ? 'bg-cyan-500'
                      : isHomelab
                      ? 'bg-emerald-500'
                      : 'bg-indigo-500'
                  }`}
                />

                <div>
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-mono text-3xl font-extrabold text-slate-400 group-hover:text-white transition-colors">
                      {item.number}
                    </span>
                    <div
                      className={`p-3 rounded-xl border transition-colors ${
                        isLinux
                          ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                          : isHomelab
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                      }`}
                    >
                      {isLinux && <Terminal className="w-5 h-5" />}
                      {isHomelab && <Server className="w-5 h-5" />}
                      {isAI && <Cpu className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs font-mono mt-1 ${
                        isLinux
                          ? 'text-cyan-300'
                          : isHomelab
                          ? 'text-emerald-300'
                          : 'text-indigo-300'
                      }`}
                    >
                      {item.tagline}
                    </p>
                  </div>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Visual Detail Box */}
                  <div className="mt-5 p-3.5 rounded-xl bg-surface-400/80 border border-white/5 font-mono text-xs">
                    {isLinux && (
                      <div className="space-y-1.5 text-slate-300">
                        <div className="text-cyan-400 font-semibold text-[11px] flex items-center gap-1.5">
                          <span>$ uname -r</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-2">
                          Linux 6.10-arch · Hyprland/WM · Bash/Zsh Custom Dotfiles
                        </div>
                      </div>
                    )}
                    {isHomelab && (
                      <div className="space-y-1.5 text-slate-300">
                        <div className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>abirdroid.ddns.net</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-2">
                          Reverse Proxy · Let's Encrypt SSL · Docker Engine & Coolify
                        </div>
                      </div>
                    )}
                    {isAI && (
                      <div className="space-y-1.5 text-slate-300">
                        <div className="text-indigo-400 font-semibold text-[11px] flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5" />
                          <span>Local Model Inference</span>
                        </div>
                        <div className="text-[11px] text-slate-400 pl-2">
                          Ollama runtime · Prompt engineering · Coding assistants
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-200/90 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
