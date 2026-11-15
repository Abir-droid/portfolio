import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, Copy, Check, ExternalLink, Cpu, Shield, Activity, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'containers' | 'domains'>('specs');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="intro" className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 flex items-center overflow-hidden">
      {/* Background ambient subtle lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-500/10 via-cyan-500/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Identity, Positioning & Fast Visual Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Live Homelab Status Ribbon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-200/80 border border-white/10 backdrop-blur-md text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Homelab Host:</span>
              <a 
                href={personalInfo.homelabUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-cyan hover:underline flex items-center gap-1 font-semibold"
              >
                {personalInfo.homelabHost}
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-emerald-400 text-[11px] hidden sm:inline">ONLINE</span>
            </div>

            {/* Profile Avatar + Main Name Header */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 bg-surface-300 shadow-2xl">
                  <img
                    src="./profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 px-2 py-0.5 rounded-md">
                    @{personalInfo.handle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>Daffodil International University · Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Bold Positioning Headline */}
            <div className="space-y-1">
              <div className="text-sm font-mono tracking-wider text-accent-cyan uppercase">
                Software Engineering Student &amp; Independent Builder
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Curious by nature.<br />
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Driven by systems &amp; code.
                </span>
              </h2>
            </div>

            {/* Concise Bio — Strictly under 30 words */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              Undergraduate at Daffodil International University. Building practical applications, configuring Linux systems, and running bare-metal containerized services on a Debian home server.
            </p>

            {/* Fast Visual Chips — 10-Second Comprehension */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100/90 border border-white/10 text-xs font-mono text-slate-200">
                <span className="text-cyan-400">🐧</span> 15+ Linux Distros Hopped
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100/90 border border-white/10 text-xs font-mono text-slate-200">
                <span className="text-emerald-400">🏠</span> Debian Bare-Metal Homelab
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100/90 border border-white/10 text-xs font-mono text-slate-200">
                <span className="text-sky-400">⚡</span> Real-Time WebRTC &amp; WebSockets
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100/90 border border-white/10 text-xs font-mono text-slate-200">
                <span className="text-amber-400">🐘</span> PostgreSQL &amp; Django
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#builds"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Explore Builds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#activity"
                className="px-5 py-3 rounded-xl bg-surface-200/80 border border-white/10 text-slate-200 hover:text-white hover:border-accent-cyan/40 text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
              >
                <Activity className="w-4 h-4 text-accent-cyan" />
                <span>GitHub Telemetry</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-surface-200/60 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-mono transition-all flex items-center gap-2"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                <span>{copied ? 'Copied Email' : 'Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Workstation Telemetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-surface-100/90 to-surface-300/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 border-b border-white/10 bg-surface-400/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">abir@workstation:~</span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1 bg-surface-500/70 p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
                      activeTab === 'specs'
                        ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('containers')}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
                      activeTab === 'containers'
                        ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Docker
                  </button>
                  <button
                    onClick={() => setActiveTab('domains')}
                    className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
                      activeTab === 'domains'
                        ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Focus
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 min-h-[300px]">
                {activeTab === 'specs' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-slate-400 border-b border-white/5 pb-2">
                      <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                      <span className="text-white font-semibold">neofetch --sysinfo</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                      <div className="sm:col-span-4 text-cyan-400 font-bold select-none hidden sm:block">
                        <pre className="text-[10px] leading-[13px] text-sky-400">
{`   /\\
  /  \\
 /\\   \\
/      \\
/   ,,   \\
/   |  |  \\
/_-''    ''-_\\`}
                        </pre>
                        <div className="text-[10px] text-slate-500 mt-2">Arch / Debian</div>
                      </div>

                      <div className="sm:col-span-8 space-y-1 text-[11px]">
                        <div><span className="text-slate-400">Host:</span> <span className="text-white font-semibold">abirdroid.ddns.net</span></div>
                        <div><span className="text-slate-400">Kernel:</span> <span className="text-cyan-300">Linux 6.x x86_64</span></div>
                        <div><span className="text-slate-400">Uptime:</span> <span className="text-emerald-400">24/7 Dedicated Server</span></div>
                        <div><span className="text-slate-400">Shell:</span> <span className="text-amber-300">Bash / Zsh / Dotfiles</span></div>
                        <div><span className="text-slate-400">Orchestrator:</span> <span className="text-indigo-300">Coolify + Traefik</span></div>
                        <div><span className="text-slate-400">Primary DB:</span> <span className="text-sky-300">PostgreSQL 16 Engine</span></div>
                        <div><span className="text-slate-400">Status:</span> <span className="text-emerald-400 font-bold">HEALTHY ● 0 errors</span></div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-slate-400 flex items-center justify-between">
                      <span>Gateway: Port 80/443 Forwarded</span>
                      <span className="text-accent-cyan">TLS 1.3 Active</span>
                    </div>
                  </div>
                )}

                {activeTab === 'containers' && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-slate-400 border-b border-white/5 pb-2">
                      <span className="text-white font-semibold">docker ps --filter status=running</span>
                      <span className="text-[10px] text-emerald-400 font-mono">4 Services Up</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="p-2.5 rounded-lg bg-surface-400/50 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            chatbox-app
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">WebRTC Signaling &amp; P2P Mesh</div>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          :3001
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-surface-400/50 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            qr-attendance-backend
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">Django + PostgreSQL 16</div>
                        </div>
                        <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                          :8000
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-surface-400/50 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            traefik-proxy
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">Reverse Proxy &amp; SSL Certs</div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          :443
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-surface-400/50 border border-white/5 flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            tictactoe-go
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">Go Microservice Engine</div>
                        </div>
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                          :8080
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'domains' && (
                  <div className="space-y-3">
                    <div className="text-white font-semibold border-b border-white/5 pb-2">
                      Core Technical Interests
                    </div>
                    
                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-start gap-2.5">
                        <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-medium">Linux &amp; Systems:</span>
                          <span className="text-slate-400 ml-1">Hopped 15–20 distros; custom dotfiles, systemd, package management.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-medium">Self-Hosting &amp; Homelab:</span>
                          <span className="text-slate-400 ml-1">Debian host, DDNS, Docker, Traefik SSL termination on bare metal.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Activity className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-medium">Full-Stack &amp; Real-Time:</span>
                          <span className="text-slate-400 ml-1">WebRTC peer audio/video mesh, WebSockets, Django, relational PostgreSQL.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-medium">Emerging Tech &amp; AI:</span>
                          <span className="text-slate-400 ml-1">Exploring local LLMs (Ollama), audio processing, and system automation.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 bg-surface-500/80 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Telemetry Stream Active
                </span>
                <span>Latency: ~24ms</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
