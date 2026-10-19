import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Discuss a Frontend Role',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePresetSelect = (preset) => {
    setFormData({
      ...formData,
      subject: preset
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 }
    });

    // Create a mailto URI with user input
    const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client after slight pause
    setTimeout(() => {
      window.location.href = mailtoUri;
    }, 600);
  };

  const subjectPresets = [
    'Discuss a Frontend Role',
    'Freelance Project Inquiry',
    'AI Systems Collaboration',
    'General Consultation'
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Build Something Exceptional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Interested in hiring, collaborating on a modern web application, or discussing an engineering opportunity? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Direct Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-0.5"
                  >
                    {personalInfo.email}
                  </a>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    Response time: &lt; 24 hours
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-start justify-between group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Phone & WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="block text-sm font-semibold text-white hover:text-indigo-400 transition-colors mt-0.5"
                  >
                    {personalInfo.phone}
                  </a>
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline mt-1 font-mono"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-indigo-400 transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Remote Availability */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Location & Availability</span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-emerald-400 font-medium mt-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open to Remote worldwide & Hybrid roles
                </p>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-all"
              >
                <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                <div>
                  <span className="block text-xs font-semibold text-white">GitHub</span>
                  <span className="text-[11px] font-mono text-slate-400">@Deorum-1</span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-all"
              >
                <LinkedinIcon className="w-5 h-5 text-sky-400 group-hover:text-sky-300" />
                <div>
                  <span className="block text-xs font-semibold text-white">LinkedIn</span>
                  <span className="text-[11px] font-mono text-slate-400">oluwaferanmi212</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate an email directly with your default mail client.
              </p>

              {/* Subject Presets */}
              <div className="mb-6">
                <label className="block text-xs font-mono text-slate-400 mb-2">
                  Topic / Purpose:
                </label>
                <div className="flex flex-wrap gap-2">
                  {subjectPresets.map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => handlePresetSelect(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        formData.subject === preset
                          ? 'bg-cyan-500 text-slate-950 font-semibold'
                          : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about the role, project scope, or questions you have..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Preparing email draft in your mail client! Thanks for reaching out.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
