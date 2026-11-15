import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check, Play, RefreshCw } from 'lucide-react';

interface TerminalTab {
  id: string;
  name: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('neofetch');
  const [copied, setCopied] = useState(false);

  const tabs: TerminalTab[] = [
    {
      id: 'neofetch',
      name: 'abir@archlinux: ~',
      command: 'neofetch --developer',
      output: (
        <div className="font-mono text-xs sm:text-xs leading-relaxed space-y-1.5 text-slate-300">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="text-accent-cyan font-bold select-none hidden sm:block shrink-0">
              <pre className="text-[10px] leading-[13px] text-sky-400">
{`   /\\
  /  \\
 /\\   \\
/      \\
/   ,,   \\
/   |  |  \\
/_-''    ''-_\\`}
              </pre>
            </div>
            <div className="space-y-1">
              <div>
                <span className="text-accent-cyan font-semibold">abir</span>
                <span className="text-slate-400">@</span>
                <span className="text-indigo-400 font-semibold">archlinux-homelab</span>
              </div>
              <div className="text-slate-500 text-[11px]">---------------------------</div>
              <div><span className="text-slate-400">OS:</span> <span className="text-white">Arch Linux x86_64 / Debian</span></div>
              <div><span className="text-slate-400">Role:</span> <span className="text-sky-300">Software Engineering Student</span></div>
              <div><span className="text-slate-400">Institution:</span> <span className="text-slate-200">Daffodil Int. University (DIU)</span></div>
              <div><span className="text-slate-400">Homelab:</span> <span className="text-emerald-400 font-medium">Online (abirdroid.ddns.net)</span></div>
              <div><span className="text-slate-400">Stack:</span> <span className="text-amber-300">Python · Django · JS · Docker · Coolify</span></div>
              <div><span className="text-slate-400">Uptime:</span> <span className="text-emerald-400">99.8% (Continuous learning)</span></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'homelab',
      name: 'docker ps --format',
      command: 'docker ps --filter "status=running"',
      output: (
        <div className="font-mono text-[11px] leading-relaxed space-y-1 text-slate-300 overflow-x-auto">
          <div className="text-slate-500 flex gap-4 border-b border-white/5 pb-1 select-none">
            <span className="w-24">CONTAINER ID</span>
            <span className="w-28">IMAGE</span>
            <span className="w-24">PORT</span>
            <span className="w-24">STATUS</span>
            <span>NAMES</span>
          </div>
          <div className="flex gap-4 text-emerald-400/90 py-0.5">
            <span className="w-24 text-slate-400 font-mono">c781a94f01</span>
            <span className="w-28 text-white">chatbox:app</span>
            <span className="w-24 text-slate-300">443/tcp</span>
            <span className="w-24 text-emerald-400">Up 14 days</span>
            <span className="text-sky-300">abir-chatbox</span>
          </div>
          <div className="flex gap-4 text-emerald-400/90 py-0.5">
            <span className="w-24 text-slate-400 font-mono">8e4b2d109a</span>
            <span className="w-28 text-white">qr-attend:py</span>
            <span className="w-24 text-slate-300">8000/tcp</span>
            <span className="w-24 text-emerald-400">Up 9 days</span>
            <span className="text-sky-300">qr-attendance</span>
          </div>
          <div className="flex gap-4 text-emerald-400/90 py-0.5">
            <span className="w-24 text-slate-400 font-mono">31fc80ba52</span>
            <span className="w-28 text-white">coolify/proxy</span>
            <span className="w-24 text-slate-300">80,443</span>
            <span className="w-24 text-emerald-400">Up 22 days</span>
            <span className="text-sky-300">traefik-proxy</span>
          </div>
          <div className="flex gap-4 text-emerald-400/90 py-0.5">
            <span className="w-24 text-slate-400 font-mono">92ac67de40</span>
            <span className="w-28 text-white">study-plan:web</span>
            <span className="w-24 text-slate-300">3000/tcp</span>
            <span className="w-24 text-emerald-400">Up 7 days</span>
            <span className="text-sky-300">study-planner</span>
          </div>
          <div className="pt-2 text-slate-400 text-[10px]">
            ➜ Total: 4 containers active · Network gateway: abirdroid.ddns.net
          </div>
        </div>
      ),
    },
    {
      id: 'stack',
      name: 'cat philosophy.md',
      command: 'cat ~/philosophy.md',
      output: (
        <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300">
          <p className="text-sky-300 font-semibold">## Core Engineering Principles</p>
          <ul className="space-y-1.5 text-slate-300 pl-2">
            <li>
              <span className="text-accent-cyan font-mono">01.</span>{' '}
              <strong className="text-white">Learn by Building:</strong> Real software teaches edge cases tutorials never mention.
            </li>
            <li>
              <span className="text-accent-cyan font-mono">02.</span>{' '}
              <strong className="text-white">Understand the Underlying Systems:</strong> Knowing how Linux, memory, and networking operate makes code better.
            </li>
            <li>
              <span className="text-accent-cyan font-mono">03.</span>{' '}
              <strong className="text-white">Ownership from Code to Bare Metal:</strong> Deploying on a home server sharpens DevOps and debugging intuition.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(`ssh abir@abirdroid.ddns.net -p 22`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden glass-card-glow shadow-2xl shadow-sky-950/40 border border-white/10 transition-all hover:border-accent-cyan/30">
      {/* Terminal Title Bar */}
      <div className="bg-surface-200/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mac / Terminal Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          </div>

          {/* Interactive Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-surface-50 text-accent-cyan border border-accent-cyan/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{tab.id === 'neofetch' ? '💻' : tab.id === 'homelab' ? '🐳' : '📝'}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={handleCopy}
          title="Copy SSH snippet"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 text-[11px]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-mono text-[10px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 bg-surface-400/95 font-mono text-xs min-h-[220px] flex flex-col justify-between scanlines relative">
        <div className="space-y-3">
          {/* Prompt line */}
          <div className="flex items-center gap-2 text-slate-300 flex-wrap">
            <span className="text-accent-cyan font-bold">abir@arch</span>
            <span className="text-slate-500">:</span>
            <span className="text-indigo-400">~</span>
            <span className="text-slate-400">$</span>
            <span className="text-white font-medium flex items-center gap-1">
              {currentTab.command}
              <span className="w-2 h-4 bg-accent-cyan inline-block animate-pulse ml-0.5" />
            </span>
          </div>

          {/* Command Output */}
          <div className="pt-1">{currentTab.output}</div>
        </div>

        {/* Footer info pill */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Bash 5.2.26 · Linux 6.10-arch</span>
          </div>
          <span className="text-slate-400 hidden sm:inline">UTF-8 · Interactive Console</span>
        </div>
      </div>
    </div>
  );
};
