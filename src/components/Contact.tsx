import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Copy, ExternalLink, Github, Linkedin, MessageSquare, Server, ArrowRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] from ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailto, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-cyan uppercase mb-2">
            <span>07</span>
            <span>·</span>
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's build something remarkable.
          </h2>
          <p className="text-slate-400 mt-3 text-base font-light">
            Open for software engineering opportunities, systems research, and collaborative builds.
          </p>
        </div>

        {/* Minimalist Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Direct Contact Channels & Homelab Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-white/10 bg-surface-200/80 backdrop-blur-xl space-y-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                Direct Communication
              </span>
              
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-surface-400/80 border border-white/5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-400 font-mono">Personal Email</div>
                    <div className="text-white font-mono text-xs sm:text-sm font-semibold truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Link Badges */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                  Verified Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-surface-300/60 hover:bg-surface-300 border border-white/5 hover:border-accent-cyan/30 flex items-center justify-between text-xs font-mono text-slate-300 hover:text-white transition-all group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-accent-cyan transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Homelab Status Card */}
            <div className="p-5 rounded-2xl border border-white/10 bg-surface-200/50 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  Homelab Server
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <div className="text-white font-semibold">
                {personalInfo.homelabHost}
              </div>
              <div className="text-slate-500 text-[10px]">
                Debian 12 · Coolify PaaS · Dynamic DNS · Latency: ~24ms
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Functional Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-white/10 bg-surface-200/80 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light mb-6">
                This triggers a direct message draft to {personalInfo.email}.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-white font-bold text-sm">Message Client Launched</div>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you! Your email client opened with the message draft.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-accent-cyan underline hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        placeholder="Alex Chen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-300/80 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-300/80 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Abir, I saw your WebRTC ChatBox build and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface-300/80 border border-white/10 text-white placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
