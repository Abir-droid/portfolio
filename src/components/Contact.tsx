import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  AlertCircle,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Functional approach: We prepare an automatic mailto fallback and attempt form dispatch
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      // Simulate network interaction state
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Trigger mailto client as reliable direct dispatch
      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an idea? Let's build something.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Whether you want to discuss a full-stack project, homelab setups, Linux configs, or collaboration opportunities, my inbox is open.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-card-glow p-6 sm:p-7 border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Communication
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Reach out through any of these platforms or copy my direct email.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-surface-300/80 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs font-mono text-white truncate font-medium">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Connected Platforms
                </span>

                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-300/50 hover:bg-surface-200 border border-white/5 hover:border-accent-cyan/30 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-surface-200 text-accent-cyan group-hover:scale-105 transition-transform">
                        {link.name === 'GitHub' && <Github className="w-4 h-4" />}
                        {link.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                        {link.name === 'Facebook' && <ExternalLink className="w-4 h-4" />}
                        {link.name === 'Telegram' && <Send className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{link.name}</div>
                        <div className="text-[11px] font-mono text-slate-400">{link.label}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent-cyan transition-colors" />
                  </a>
                ))}
              </div>

              {/* Location & Timezone info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Dhaka, Bangladesh
                </span>
                <span className="text-emerald-400">UTC+6 Timezone</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-card-glow p-6 sm:p-8 border border-white/10 relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate an email conversation directly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-3 animate-in fade-in">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Message dispatched!</strong>
                    Your default email client opened with the drafted message. You can also reach me directly on Telegram (@Abirdroid).
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-400/90 border text-white text-xs font-mono placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-surface-400/90 border text-white text-xs font-mono placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500/60 focus:border-rose-500'
                          : 'border-white/10 focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Project Collaboration / Homelab Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-400/90 border text-white text-xs font-mono placeholder:text-slate-400 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share what you'd like to build, discuss, or collaborate on..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-surface-400/90 border text-white text-xs font-mono placeholder:text-slate-400 focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500/60 focus:border-rose-500'
                        : 'border-white/10 focus:border-accent-cyan/60 focus:ring-1 focus:ring-accent-cyan/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing dispatch...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
