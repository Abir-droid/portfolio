import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Globe, Radio, ShieldCheck, Cpu, Video, QrCode, Database, Layers, CheckCircle2, ArrowDown, Activity, Info, ExternalLink } from 'lucide-react';
import { infrastructureNodes, personalInfo } from '../data/portfolioData';
import { InfrastructureNode } from '../types';

export const SystemsLab: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('server');

  const selectedNode = infrastructureNodes.find((n) => n.id === selectedNodeId) || infrastructureNodes[3];

  const getIcon = (iconName: string, className = 'w-5 h-5') => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} />;
      case 'Radio': return <Radio className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Server': return <Server className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Video': return <Video className={className} />;
      case 'QrCode': return <QrCode className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Layers': return <Layers className={className} />;
      default: return <Server className={className} />;
    }
  };

  // Node groups
  const edgeNode = infrastructureNodes.find((n) => n.id === 'internet')!;
  const dnsNode = infrastructureNodes.find((n) => n.id === 'ddns')!;
  const routerNode = infrastructureNodes.find((n) => n.id === 'router')!;
  const serverNode = infrastructureNodes.find((n) => n.id === 'server')!;
  const proxyNode = infrastructureNodes.find((n) => n.id === 'orchestration')!;
  const workloads = infrastructureNodes.filter((n) => n.layer === 'workload');

  return (
    <section id="systems" className="py-24 lg:py-32 relative overflow-hidden bg-surface-500/80">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase">
              <span>04</span>
              <span>·</span>
              <span>Signature Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Systems &amp; Homelab Topology
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base leading-relaxed">
              Interactive topological visualization of my 24/7 Debian home server. Live packet paths from external dynamic DNS through reverse proxies down to containerized workloads.
            </p>
          </div>

          {/* Quick status pill */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-200/80 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Host:</span>
            <a 
              href={personalInfo.homelabUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent-cyan font-bold hover:underline flex items-center gap-1"
            >
              {personalInfo.homelabHost}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* TOPOLOGY CANVAS + INSPECTOR SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Animated Infrastructure Topology (7 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-surface-200/80 to-surface-400/90 shadow-2xl backdrop-blur-xl relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Infrastructure Diagram
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                Click or hover any component to inspect
              </span>
            </div>

            {/* Visual Topology Pipeline */}
            <div className="flex flex-col items-center max-w-xl mx-auto space-y-3">
              
              {/* NODE 1: Public Internet */}
              <button
                onClick={() => setSelectedNodeId(edgeNode.id)}
                onMouseEnter={() => setSelectedNodeId(edgeNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  selectedNodeId === edgeNode.id
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-surface-300/70 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    {getIcon(edgeNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{edgeNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono">{edgeNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {edgeNode.status}
                </span>
              </button>

              {/* Animated Connector 1 */}
              <div className="h-6 flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-sky-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
              </div>

              {/* NODE 2: Dynamic DNS */}
              <button
                onClick={() => setSelectedNodeId(dnsNode.id)}
                onMouseEnter={() => setSelectedNodeId(dnsNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  selectedNodeId === dnsNode.id
                    ? 'bg-sky-500/15 border-sky-400 shadow-lg shadow-sky-500/10 scale-[1.02]'
                    : 'bg-surface-300/70 border-white/10 hover:border-sky-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    {getIcon(dnsNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{dnsNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono">{dnsNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  {dnsNode.status}
                </span>
              </button>

              {/* Animated Connector 2 */}
              <div className="h-6 flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-sky-400 to-indigo-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.2 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
              </div>

              {/* NODE 3: Router & NAT Firewall */}
              <button
                onClick={() => setSelectedNodeId(routerNode.id)}
                onMouseEnter={() => setSelectedNodeId(routerNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  selectedNodeId === routerNode.id
                    ? 'bg-indigo-500/15 border-indigo-400 shadow-lg shadow-indigo-500/10 scale-[1.02]'
                    : 'bg-surface-300/70 border-white/10 hover:border-indigo-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    {getIcon(routerNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{routerNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono">{routerNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {routerNode.status}
                </span>
              </button>

              {/* Animated Connector 3 */}
              <div className="h-6 flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-indigo-400 to-rose-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.4 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
              </div>

              {/* NODE 4: Debian Bare-Metal Host Server */}
              <button
                onClick={() => setSelectedNodeId(serverNode.id)}
                onMouseEnter={() => setSelectedNodeId(serverNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  selectedNodeId === serverNode.id
                    ? 'bg-rose-500/15 border-rose-400 shadow-lg shadow-rose-500/10 scale-[1.02]'
                    : 'bg-surface-300/70 border-white/10 hover:border-rose-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    {getIcon(serverNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{serverNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono">{serverNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 font-bold">
                  {serverNode.status}
                </span>
              </button>

              {/* Animated Connector 4 */}
              <div className="h-6 flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-rose-400 to-cyan-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.6 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
              </div>

              {/* NODE 5: Coolify PaaS & Traefik Reverse Proxy */}
              <button
                onClick={() => setSelectedNodeId(proxyNode.id)}
                onMouseEnter={() => setSelectedNodeId(proxyNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  selectedNodeId === proxyNode.id
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-surface-300/70 border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    {getIcon(proxyNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{proxyNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono">{proxyNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {proxyNode.status}
                </span>
              </button>

              {/* Fan-Out Branching SVG Connectors */}
              <div className="w-full h-10 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 40" fill="none">
                  <path d="M 200 0 L 200 15 L 50 15 L 50 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 15 L 150 15 L 150 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 15 L 250 15 L 250 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 15 L 350 15 L 350 40" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                </svg>
              </div>

              {/* NODE 6: 4 Workload Pods (Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
                {workloads.map((wl) => (
                  <button
                    key={wl.id}
                    onClick={() => setSelectedNodeId(wl.id)}
                    onMouseEnter={() => setSelectedNodeId(wl.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      selectedNodeId === wl.id
                        ? 'bg-emerald-500/15 border-emerald-400 shadow-md shadow-emerald-500/10 scale-[1.03]'
                        : 'bg-surface-300/60 border-white/10 hover:border-emerald-500/30'
                    }`}
                  >
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-surface-200 border border-white/10 flex items-center justify-center text-emerald-400 mb-2">
                        {getIcon(wl.icon, 'w-3.5 h-3.5')}
                      </div>
                      <div className="text-xs font-bold text-white truncate">{wl.label}</div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">{wl.sublabel}</div>
                    </div>
                    <div className="mt-2 text-[9px] font-mono text-emerald-400 font-semibold">
                      {wl.status}
                    </div>
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* RIGHT: Detailed Component Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-3xl border border-white/10 bg-surface-200/90 shadow-2xl backdrop-blur-xl space-y-5"
              >
                {/* Node Inspector Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                      {getIcon(selectedNode.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-accent-cyan tracking-wider">
                        Topology Inspector
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                        {selectedNode.label}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold">
                    {selectedNode.status}
                  </span>
                </div>

                {/* Tech & Layer */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Technology / Stack:</span>
                    <span className="text-cyan-300 font-semibold">{selectedNode.tech}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Configuration / Spec:</span>
                    <span className="text-white">{selectedNode.spec}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-2 border-t border-white/5">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono mb-1">Architecture Role:</span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {selectedNode.description}
                  </p>
                </div>

                {/* Live Homelab Context */}
                <div className="p-3.5 rounded-xl bg-surface-400/80 border border-white/5 space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="font-semibold text-white">Homelab Execution</span>
                  </div>
                  <div className="text-slate-400 leading-normal">
                    Configured and maintained on bare metal. No public cloud VMs; pure physical hardware with DDNS automated sync.
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Hardware Quick Stats Ribbon */}
            <div className="p-4 rounded-2xl bg-surface-300/60 border border-white/10 text-xs font-mono space-y-2">
              <div className="text-slate-400 uppercase text-[10px] tracking-wider">Hardware &amp; Security Highlights</div>
              <div className="flex items-center justify-between text-slate-300">
                <span>OS Host:</span>
                <span className="text-white">Debian 12 Bookworm</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>PaaS Engine:</span>
                <span className="text-cyan-400">Coolify + Docker</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Certificates:</span>
                <span className="text-emerald-400">Let's Encrypt (Auto SSL)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Network:</span>
                <span className="text-slate-300">Isolated Subnet / Port 80,443</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
