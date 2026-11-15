import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Video, QrCode, Terminal, Shield, Play, RotateCcw, Sparkles, Layers, ArrowRight, Mic, Check } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SkillIcon } from './SkillIcon';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mini interactive TicTacToe state for Go Project card
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState<string>('Your turn (X)');

  const handleCellClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus('Winner: X!');
      return;
    }
    if (newBoard.every((cell) => cell !== null)) {
      setGameStatus('Draw!');
      return;
    }

    // Go Engine Simulated Bot Move (O)
    setIsXNext(false);
    setGameStatus('Go Engine thinking...');

    setTimeout(() => {
      const emptyIndices = newBoard
        .map((val, idx) => (val === null ? idx : null))
        .filter((v): v is number => v !== null);

      if (emptyIndices.length > 0) {
        // Pick best or random open cell
        const botMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        newBoard[botMove] = 'O';
        setBoard([...newBoard]);

        const botWinner = calculateWinner(newBoard);
        if (botWinner) {
          setGameStatus('Go Engine (O) Won!');
        } else if (newBoard.every((cell) => cell !== null)) {
          setGameStatus('Game Draw!');
        } else {
          setGameStatus('Your turn (X)');
          setIsXNext(true);
        }
      }
    }, 400);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('Your turn (X)');
  };

  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  // Rolling QR token state for QR attendance card
  const [qrCounter, setQrCounter] = useState(15);
  useEffect(() => {
    const interval = setInterval(() => {
      setQrCounter((prev) => (prev > 1 ? prev - 1 : 15));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const flagship = projects.find((p) => p.id === 'chatbox') || projects[0];
  const qrProject = projects.find((p) => p.id === 'qr-attendance');
  const goProject = projects.find((p) => p.id === 'tictactoe-go');
  const dotfilesProject = projects.find((p) => p.id === 'custom-omarchy');
  const complaintProject = projects.find((p) => p.id === 'complaint-management-system');
  const voiceProject = projects.find((p) => p.id === 'voice-assistant');

  return (
    <section id="builds" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase">
              <span>03</span>
              <span>·</span>
              <span>Selected Builds</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base leading-relaxed">
              Real codebases actively running on bare-metal servers and documented on GitHub. An asymmetric showcase of real-time systems, concurrency, and academic tooling.
            </p>
          </div>

          <a
            href="https://github.com/Abir-droid?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-accent-cyan hover:underline group shrink-0"
          >
            <span>Browse all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 1. STANDOUT FULL-WIDTH FEATURE: ChatBox (WebRTC & WebSocket) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-br from-surface-100/90 via-surface-200/80 to-surface-400/90 shadow-2xl overflow-hidden backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Project Narrative & Architecture (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Flagship Full-Stack Build
                  </span>
                  {flagship.liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Debian Homelab
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  {flagship.name}
                </h3>
                
                <p className="text-accent-cyan text-sm sm:text-base font-mono mb-4">
                  {flagship.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {flagship.description}
                </p>

                {/* Key Architecture Badges */}
                <div className="space-y-2 mb-8">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Core Technical Highlights
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light">
                    {flagship.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & External Actions */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {flagship.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-300/80 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      <SkillIcon name={tech} size={15} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {flagship.liveUrl && (
                    <a
                      href={flagship.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Video className="w-4 h-4" />
                      <span>Launch Live WebRTC App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={flagship.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-surface-300/80 hover:bg-surface-300 border border-white/10 text-slate-200 hover:text-white font-mono text-xs sm:text-sm flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive WebRTC Stream & Telemetry Mockup (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-surface-400/40 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-surface-500/90 p-5 shadow-2xl space-y-4">
                
                {/* Simulated WebRTC Stream Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">WebRTC RTCPeerConnection</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ENCRYPTED P2P
                  </span>
                </div>

                {/* Simulated Video Preview Frame */}
                <div className="relative aspect-video rounded-xl bg-surface-300 border border-white/10 overflow-hidden flex flex-col justify-between p-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 z-10">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">Peer #1 (Client)</span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-cyan-300 backdrop-blur-sm">720p @ 30fps</span>
                  </div>

                  {/* Audio Waveform visualization */}
                  <div className="flex items-end justify-center gap-1 h-12 w-full my-auto opacity-70">
                    {[40, 65, 30, 85, 95, 45, 70, 80, 50, 90, 60, 35, 75, 40, 85, 60, 45, 90, 30].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-cyan-500 to-sky-300 rounded-full animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
                    <span className="bg-black/60 px-2 py-0.5 rounded">ICE: Host Candidate</span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-emerald-400">Latency: 18ms</span>
                  </div>
                </div>

                {/* Duplex Chat Message Mockup */}
                <div className="space-y-2 text-xs font-mono pt-1">
                  <div className="p-2 rounded-lg bg-surface-300/60 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400">[WS signaling]</span>
                    <span className="text-cyan-300">Handshake verified</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-300/60 border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400">[Docker Container]</span>
                    <span className="text-emerald-400">abirdroid.ddns.net:3001</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. ASYMMETRIC GRID: QR Attendance + Interactive Go Tic-Tac-Toe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Card A: QR Attendance System (7 cols) */}
          {qrProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-surface-100/90 to-surface-300/80 shadow-xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Academic Automation
                  </span>
                  {qrProject.liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Homelab
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{qrProject.name}</h3>
                <p className="text-emerald-400 font-mono text-xs sm:text-sm mb-3">{qrProject.tagline}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">{qrProject.description}</p>

                {/* Animated Dynamic Rolling QR Demonstration */}
                <div className="p-5 rounded-2xl bg-surface-400/70 border border-white/10 mb-6 flex flex-col sm:flex-row items-center gap-5">
                  <div className="relative p-3 rounded-xl bg-white text-black shrink-0 shadow-lg">
                    <QrCode className="w-20 h-20 text-slate-900" />
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-white font-mono text-[10px] px-1.5 py-0.5 rounded font-bold">
                      {qrCounter}s
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono w-full">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Rolling Cryptographic Token</span>
                      <span className="text-emerald-400">Auto-Refreshes in {qrCounter}s</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-surface-200 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 transition-all duration-1000"
                        style={{ width: `${(qrCounter / 15) * 100}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Prevents attendance proxy scans. Backed by Django ORM &amp; PostgreSQL.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {qrProject.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-300/80 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      <SkillIcon name={tech} size={15} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {qrProject.liveUrl && (
                    <a
                      href={qrProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Portal</span>
                    </a>
                  )}
                  <a
                    href={qrProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-surface-300/80 hover:bg-surface-300 border border-white/10 text-slate-200 text-xs sm:text-sm font-mono flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card B: Interactive Playable Tic-Tac-Toe in Go (5 cols) */}
          {goProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-surface-100/90 to-surface-300/80 shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Compiled Go Engine
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Playable Demo</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{goProject.name}</h3>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-3">{goProject.tagline}</p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                  Built to explore Go's compiled performance, memory pointer semantics, and goroutine architectures. Test the engine logic right on this interactive board:
                </p>

                {/* Interactive Mini Game Board */}
                <div className="p-4 rounded-2xl bg-surface-400/80 border border-white/10 mb-6">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-cyan-300 font-semibold">{gameStatus}</span>
                    <button
                      onClick={resetGame}
                      className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                      title="Reset Board"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 aspect-square max-w-[200px] mx-auto">
                    {board.map((cell, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleCellClick(idx)}
                        className={`rounded-xl border font-mono font-extrabold text-lg flex items-center justify-center transition-all ${
                          cell === 'X'
                            ? 'text-cyan-400 bg-cyan-500/20 border-cyan-500/40'
                            : cell === 'O'
                            ? 'text-amber-400 bg-amber-500/20 border-amber-500/40'
                            : 'bg-surface-200/90 border-white/10 hover:bg-white/10 text-transparent'
                        }`}
                      >
                        {cell || '.'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {goProject.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-300/80 border border-white/10 text-xs font-mono text-slate-200"
                    >
                      <SkillIcon name={tech} size={15} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {goProject.liveUrl && (
                    <a
                      href={goProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Server</span>
                    </a>
                  )}
                  <a
                    href={goProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-surface-300/80 hover:bg-surface-300 border border-white/10 text-slate-200 text-xs sm:text-sm font-mono flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* 3. ASYMMETRIC ROW: Custom Omarchy Dotfiles + Campus Complaint Management + Voice Assistant */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card C: Custom Omarchy Linux Dotfiles */}
          {dotfilesProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-surface-200/60 hover:bg-surface-200/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    Linux Workstation
                  </span>
                  <Terminal className="w-4 h-4 text-sky-400" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{dotfilesProject.name}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                  {dotfilesProject.description}
                </p>

                <div className="p-3 rounded-xl bg-surface-400/80 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1 mb-4">
                  <div className="text-sky-400">$ pacman -Qe | grep -E "bspwm|zsh"</div>
                  <div className="text-slate-400">➜ Reproducible Arch workstation dotfiles</div>
                  <div className="text-slate-400">➜ Custom systemd service overrides</div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {dotfilesProject.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={dotfilesProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Inspect Dotfiles Repo</span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Card D: Campus Complaint Management System */}
          {complaintProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface-200/60 hover:bg-surface-200/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Workflow Systems
                  </span>
                  {complaintProject.liveUrl && (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Homelab
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{complaintProject.name}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                  {complaintProject.description}
                </p>

                {/* Workflow lifecycle diagram */}
                <div className="p-3 rounded-xl bg-surface-400/80 border border-white/5 font-mono text-[10px] text-slate-300 mb-4 flex items-center justify-between">
                  <span className="text-cyan-400">Log</span>
                  <span>→</span>
                  <span className="text-amber-400">Triage</span>
                  <span>→</span>
                  <span className="text-indigo-400">Department</span>
                  <span>→</span>
                  <span className="text-emerald-400">Resolved</span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {complaintProject.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  {complaintProject.liveUrl && (
                    <a
                      href={complaintProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-cyan hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a
                    href={complaintProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Card E: Voice Assistant & System Automation */}
          {voiceProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-surface-200/60 hover:bg-surface-200/90 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Audio &amp; OS Automation
                  </span>
                  <Mic className="w-4 h-4 text-purple-400" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{voiceProject.name}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed mb-4">
                  {voiceProject.description}
                </p>

                <div className="p-3 rounded-xl bg-surface-400/80 border border-white/5 font-mono text-[11px] text-slate-300 space-y-1 mb-4">
                  <div className="text-purple-400">Intent: Speech Recognition Pipeline</div>
                  <div className="text-slate-400">➜ Dispatches desktop &amp; OS automations</div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {voiceProject.techStack.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={voiceProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Automation Code</span>
                </a>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
