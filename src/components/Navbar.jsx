import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Lab', href: '#ai-lab', isBadge: true },
    { label: 'Experience', href: '#experience' },
    { label: 'Education & Certs', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono text-lg">
                SO
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                  Feranmi Sokunbi
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  Active
                </span>
              </div>
              <span className="text-xs text-slate-400 block font-mono">
                @{personalInfo.handle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.isBadge && (
                  <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    NEW
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/70 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.isBadge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      NEW
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View & Download Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl"
              >
                <Send className="w-4 h-4" />
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
