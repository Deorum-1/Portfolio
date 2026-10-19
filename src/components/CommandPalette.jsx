import React, { useState, useEffect } from 'react';
import {
  Search,
  FileText,
  Mail,
  Phone,
  Layers,
  Sparkles,
  ExternalLink,
  Github,
  Linkedin,
  Palette,
  Volume2,
  X,
  ArrowRight,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projectsData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { playPopSound } from '../utils/audio';

export default function CommandPalette({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open through parent if we had an external trigger, or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const commandItems = [
    // Navigation
    { id: 'nav-about', title: 'Go to About & Philosophy', category: 'Navigation', icon: <Code2 className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#about'; onClose(); } },
    { id: 'nav-skills', title: 'Go to Skills Matrix', category: 'Navigation', icon: <Sparkles className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#skills'; onClose(); } },
    { id: 'nav-projects', title: 'Go to Featured Projects', category: 'Navigation', icon: <Layers className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#projects'; onClose(); } },
    { id: 'nav-ai-lab', title: 'Go to AI Prompt Engineering Lab', category: 'Navigation', icon: <Terminal className="w-4 h-4 text-purple-400" />, action: () => { window.location.href = '#ai-lab'; onClose(); } },
    { id: 'nav-experience', title: 'Go to Experience Timeline', category: 'Navigation', icon: <Briefcase className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#experience'; onClose(); } },
    { id: 'nav-education', title: 'Go to Education & Certifications', category: 'Navigation', icon: <GraduationCap className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#education'; onClose(); } },
    { id: 'nav-contact', title: 'Go to Contact Hub', category: 'Navigation', icon: <Mail className="w-4 h-4 text-cyan-400" />, action: () => { window.location.href = '#contact'; onClose(); } },

    // Actions
    { id: 'act-resume', title: 'View & Download Resume (PDF)', category: 'Actions', icon: <FileText className="w-4 h-4 text-emerald-400" />, action: () => { onOpenResume(); onClose(); } },
    { id: 'act-copy-email', title: 'Copy Email (feranmiisaac622@gmail.com)', category: 'Actions', icon: <Mail className="w-4 h-4 text-sky-400" />, action: () => { navigator.clipboard.writeText(personalInfo.email); playPopSound(880, 0.05); onClose(); } },
    { id: 'act-copy-phone', title: 'Copy Phone (+234 702 536 4239)', category: 'Actions', icon: <Phone className="w-4 h-4 text-sky-400" />, action: () => { navigator.clipboard.writeText(personalInfo.phone); playPopSound(880, 0.05); onClose(); } },
    { id: 'act-whatsapp', title: 'Chat on WhatsApp', category: 'Actions', icon: <ExternalLink className="w-4 h-4 text-emerald-400" />, action: () => { window.open(`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`, '_blank'); onClose(); } },
    { id: 'act-github', title: 'Visit GitHub Profile (@Deorum-1)', category: 'Actions', icon: <GithubIcon className="w-4 h-4 text-slate-300" />, action: () => { window.open(personalInfo.github, '_blank'); onClose(); } },
    { id: 'act-linkedin', title: 'Connect on LinkedIn', category: 'Actions', icon: <LinkedinIcon className="w-4 h-4 text-sky-400" />, action: () => { window.open(personalInfo.linkedin, '_blank'); onClose(); } },

    // Live Project Direct Launch
    { id: 'proj-award', title: 'Launch Award-Winning Website (GSAP & React)', category: 'Projects', icon: <ExternalLink className="w-4 h-4 text-purple-400" />, action: () => { window.open('https://award-winning-website-with-reactjs.vercel.app', '_blank'); onClose(); } },
    { id: 'proj-realestate', title: 'Launch Real Estate Listing Platform', category: 'Projects', icon: <ExternalLink className="w-4 h-4 text-cyan-400" />, action: () => { window.open('https://real-estate-website-five-bice.vercel.app', '_blank'); onClose(); } },
  ];

  const filteredItems = commandItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-[#090d16] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/90 gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search sections, projects, contact..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-700/80 rounded">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs font-mono">
              No matching commands found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-white border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {item.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer Hints */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-cyan-400/80">Sokunbi Oluwaferanmi Portfolio</span>
        </div>
      </div>
    </div>
  );
}
