import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Globe, Radio, ShieldCheck, Cpu, Video, QrCode, Database, Layers, CheckCircle2, ArrowDown, Activity, Info, ExternalLink, Play, HardDrive, Wifi } from 'lucide-react';
import { infrastructureNodes, personalInfo } from '../data/portfolioData';
import { InfrastructureNode } from '../types';

export const SystemsLab: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('server');
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(-1);

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

  // Interactive request flow simulation
  const handleSimulateRequest = async () => {
    if (simulating) return;
    setSimulating(true);

    const steps = ['internet', 'ddns', 'router', 'server', 'orchestration', 'app-chatbox'];
    for (let i = 0; i < steps.length; i++) {
      setActiveStep(i);
      setSelectedNodeId(steps[i]);
      await new Promise((r) => setTimeout(r, 650));
    }
    await new Promise((r) => setTimeout(r, 800));
    setActiveStep(-1);
    setSimulating(false);
  };

  return (
    <section id="systems" className="py-28 lg:py-36 relative overflow-hidden bg-surface-500/80">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

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
            <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
              Interactive topological visualization of my 24/7 Debian home server. Live packet paths from external dynamic DNS through reverse proxies down to containerized workloads.
            </p>
          </div>

          {/* Interactive Simulation Trigger & Homelab Status */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleSimulateRequest}
              disabled={simulating}
              className={`px-4 py-2.5 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                simulating
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
                  : 'bg-surface-200/90 hover:bg-surface-100 border-white/10 hover:border-cyan-500/40 text-white'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${simulating ? 'animate-spin text-cyan-400' : 'text-cyan-400'}`} />
              <span>{simulating ? 'Simulating Traffic Flow...' : 'Simulate Request Flow'}</span>
            </button>

            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-surface-200/80 border border-white/10 text-xs font-mono text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <a 
                href={personalInfo.homelabUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-cyan font-bold hover:underline flex items-center gap-1"
              >
                {personalInfo.homelabHost}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* TOPOLOGY CANVAS + INSPECTOR SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Animated Infrastructure Topology (7 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-surface-200/90 to-surface-400/95 shadow-2xl backdrop-blur-xl relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live Traffic &amp; Architecture Topology
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Tap nodes to inspect protocols &amp; specs
              </span>
            </div>

            {/* Visual Topology Pipeline */}
            <div className="flex flex-col items-center max-w-xl mx-auto space-y-2">
              
              {/* NODE 1: Public Internet */}
              <button
                onClick={() => setSelectedNodeId(edgeNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  selectedNodeId === edgeNode.id
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-surface-300/80 border-white/[0.08] hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedNodeId === edgeNode.id ? 'bg-cyan-500/25 text-cyan-300' : 'bg-surface-200 text-cyan-400'
                  }`}>
                    {getIcon(edgeNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{edgeNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{edgeNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                  {edgeNode.status}
                </span>
              </button>

              {/* Animated Connector 1 with Flowing Particles */}
              <div className="h-7 w-full flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400 to-sky-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
                <span className="absolute text-[10px] font-mono text-cyan-400/80 bg-surface-400 px-2 py-0.5 rounded-full border border-white/5">
                  TLS 1.3 / HTTPS
                </span>
              </div>

              {/* NODE 2: Dynamic DNS */}
              <button
                onClick={() => setSelectedNodeId(dnsNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  selectedNodeId === dnsNode.id
                    ? 'bg-sky-500/15 border-sky-400 shadow-xl shadow-sky-500/10 scale-[1.02]'
                    : 'bg-surface-300/80 border-white/[0.08] hover:border-sky-500/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedNodeId === dnsNode.id ? 'bg-sky-500/25 text-sky-300' : 'bg-surface-200 text-sky-400'
                  }`}>
                    {getIcon(dnsNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{dnsNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{dnsNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20 font-semibold">
                  {dnsNode.status}
                </span>
              </button>

              {/* Animated Connector 2 */}
              <div className="h-7 w-full flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-sky-400 to-indigo-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.2 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
                <span className="absolute text-[10px] font-mono text-sky-400/80 bg-surface-400 px-2 py-0.5 rounded-full border border-white/5">
                  Dynamic IP Sync
                </span>
              </div>

              {/* NODE 3: Router & NAT Firewall */}
              <button
                onClick={() => setSelectedNodeId(routerNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  selectedNodeId === routerNode.id
                    ? 'bg-indigo-500/15 border-indigo-400 shadow-xl shadow-indigo-500/10 scale-[1.02]'
                    : 'bg-surface-300/80 border-white/[0.08] hover:border-indigo-500/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedNodeId === routerNode.id ? 'bg-indigo-500/25 text-indigo-300' : 'bg-surface-200 text-indigo-400'
                  }`}>
                    {getIcon(routerNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{routerNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{routerNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                  {routerNode.status}
                </span>
              </button>

              {/* Animated Connector 3 */}
              <div className="h-7 w-full flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-indigo-400 to-rose-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.4 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
                <span className="absolute text-[10px] font-mono text-indigo-400/80 bg-surface-400 px-2 py-0.5 rounded-full border border-white/5">
                  Port Forward 80 / 443
                </span>
              </div>

              {/* NODE 4: Debian Bare-Metal Host Server with Server Visualization */}
              <div className="w-full space-y-2">
                <button
                  onClick={() => setSelectedNodeId(serverNode.id)}
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    selectedNodeId === serverNode.id
                      ? 'bg-rose-500/15 border-rose-400 shadow-xl shadow-rose-500/10 scale-[1.02]'
                      : 'bg-surface-300/80 border-white/[0.08] hover:border-rose-500/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      selectedNodeId === serverNode.id ? 'bg-rose-500/25 text-rose-300' : 'bg-surface-200 text-rose-400'
                    }`}>
                      {getIcon(serverNode.icon)}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-white tracking-tight">{serverNode.label}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{serverNode.sublabel}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/20 font-bold">
                    {serverNode.status}
                  </span>
                </button>

                {/* Subtle Animated Server Visualization Chassis */}
                <div className="p-3 rounded-xl bg-surface-500/90 border border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-400 hidden sm:inline">Bare-Metal Chassis:</span>
                    <span className="text-white font-semibold">Debian 12 Bookworm</span>
                  </div>

                  {/* Animated Drive Activity LEDs */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 hidden md:inline">Drive Activity:</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Connector 4 */}
              <div className="h-7 w-full flex items-center justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-rose-400 to-cyan-400 relative overflow-hidden">
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear', delay: 0.6 }}
                    className="w-full h-1/2 bg-white"
                  />
                </div>
                <span className="absolute text-[10px] font-mono text-rose-400/80 bg-surface-400 px-2 py-0.5 rounded-full border border-white/5">
                  Internal Bridge Network
                </span>
              </div>

              {/* NODE 5: Coolify PaaS & Traefik Reverse Proxy */}
              <button
                onClick={() => setSelectedNodeId(proxyNode.id)}
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  selectedNodeId === proxyNode.id
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : 'bg-surface-300/80 border-white/[0.08] hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedNodeId === proxyNode.id ? 'bg-cyan-500/25 text-cyan-300' : 'bg-surface-200 text-cyan-400'
                  }`}>
                    {getIcon(proxyNode.icon)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white tracking-tight">{proxyNode.label}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{proxyNode.sublabel}</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                  {proxyNode.status}
                </span>
              </button>

              {/* Fan-Out Branching SVG Connectors with Pulsing Signals */}
              <div className="w-full h-12 flex items-center justify-center relative">
                <svg className="w-full h-full" viewBox="0 0 400 48" fill="none">
                  <path d="M 200 0 L 200 18 L 50 18 L 50 48" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 18 L 150 18 L 150 48" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 18 L 250 18 L 250 48" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 200 0 L 200 18 L 350 18 L 350 48" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                </svg>
              </div>

              {/* NODE 6: 4 Workload Pods (Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-1">
                {workloads.map((wl) => (
                  <button
                    key={wl.id}
                    onClick={() => setSelectedNodeId(wl.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                      selectedNodeId === wl.id
                        ? 'bg-emerald-500/15 border-emerald-400 shadow-md shadow-emerald-500/10 scale-[1.03]'
                        : 'bg-surface-300/80 border-white/[0.08] hover:border-emerald-500/40'
                    }`}
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-surface-200 border border-white/10 flex items-center justify-center text-emerald-400 mb-2.5">
                        {getIcon(wl.icon, 'w-4 h-4')}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white truncate">{wl.label}</div>
                      <div className="text-[11px] text-slate-400 font-mono truncate mt-0.5">{wl.sublabel}</div>
                    </div>
                    <div className="mt-2.5 text-[11px] font-mono text-emerald-400 font-semibold">
                      ● {wl.status}
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-7 rounded-3xl border border-white/[0.08] bg-surface-200/95 shadow-2xl backdrop-blur-xl space-y-5"
              >
                {/* Node Inspector Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                      {getIcon(selectedNode.icon, 'w-6 h-6')}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-accent-cyan tracking-wider font-semibold">
                        Topology Inspector
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                        {selectedNode.label}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold">
                    {selectedNode.status}
                  </span>
                </div>

                {/* Tech & Layer */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Technology / Stack:</span>
                    <span className="text-cyan-300 font-semibold text-sm">{selectedNode.tech}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-xs uppercase">Configuration / Spec:</span>
                    <span className="text-white text-sm">{selectedNode.spec}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="pt-2 border-t border-white/5">
                  <span className="text-slate-400 block text-xs uppercase font-mono mb-1.5">Architecture Role:</span>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {selectedNode.description}
                  </p>
                </div>

                {/* Live Homelab Context */}
                <div className="p-4 rounded-xl bg-surface-400/80 border border-white/5 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-semibold text-white">Homelab Execution</span>
                  </div>
                  <div className="text-slate-400 leading-relaxed font-light">
                    Configured and maintained on bare metal. No public cloud VMs; pure physical hardware with dynamic DNS automated sync.
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Hardware Quick Stats Ribbon */}
            <div className="p-5 rounded-2xl bg-surface-300/70 border border-white/[0.08] text-xs font-mono space-y-2.5">
              <div className="text-slate-400 uppercase text-xs tracking-wider font-semibold">Hardware &amp; Security Highlights</div>
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>OS Host:</span>
                <span className="text-white font-medium">Debian 12 Bookworm</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>PaaS Engine:</span>
                <span className="text-cyan-400 font-medium">Coolify + Docker</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 text-sm">
                <span>Certificates:</span>
                <span className="text-emerald-400 font-medium">Let's Encrypt (Auto SSL)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300 text-sm">
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
