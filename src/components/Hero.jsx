import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  FileDown,
  Mail,
  Phone,
  Check,
  Copy,
  Terminal,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const heroRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for Hero left column elements
      gsap.fromTo(
        '.gsap-hero-elem',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
      );

      // Subtle 3D float for the interactive terminal card
      if (terminalRef.current) {
        gsap.to(terminalRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const triggerResumeConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenResume();
  };

  return (
    <section ref={heroRef} className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-12 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="gsap-hero-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Anthropic AI Certified · Available for High-Impact Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="gsap-hero-elem text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Sokunbi Oluwaferanmi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="gsap-hero-elem text-lg sm:text-xl font-medium text-slate-300 mb-4 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">&gt;</span>
              Software Developer & Frontend Engineer
            </p>

            {/* Descriptive Paragraph from Resume */}
            <p className="gsap-hero-elem text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
              Computer Science graduate (B.Sc., 2026) building responsive, performant web applications with{' '}
              <span className="text-slate-200 font-semibold">React.js</span>,{' '}
              <span className="text-slate-200 font-semibold">Next.js</span>,{' '}
              <span className="text-slate-200 font-semibold">GSAP</span>, and modern JavaScript. 
              Proven across the entire lifecycle—from architecture to testing and deployment—with{' '}
              <span className="text-cyan-300 font-medium">200+ hours in AI systems</span> & Anthropic certification.
            </p>

            {/* CTAs */}
            <div className="gsap-hero-elem flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={triggerResumeConfetti}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-500/40 shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Quick Contact & Social Strip */}
            <div className="gsap-hero-elem flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 w-full text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span className="text-xs font-mono">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-sky-400 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-mono">{personalInfo.email}</span>
                    <Copy className="w-3 h-3 text-slate-500 ml-0.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal / Code Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={terminalRef}
              className="w-full max-w-lg glass-panel rounded-2xl p-5 border border-slate-700/60 shadow-2xl relative overflow-hidden group"
            >
              {/* Top Bar with mock macOS window buttons */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950/60 px-3 py-1 rounded-md border border-slate-800">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.config.ts</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  gsap active
                </div>
              </div>

              {/* Code Snippet / Config Viewer */}
              <div className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5 overflow-x-auto py-1">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">'Sokunbi Oluwaferanmi'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-amber-300">'Software Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">'B.Sc. Computer Science (2026)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">institution:</span>{' '}
                  <span className="text-slate-300">'FUNAAB, Abeokuta'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-sky-300">'React.js'</span>,{' '}
                  <span className="text-sky-300">'Next.js'</span>,{' '}
                  <span className="text-sky-300">'GSAP'</span>,{' '}
                  <span className="text-sky-300">'Tailwind'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">certification:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">provider:</span>{' '}
                  <span className="text-amber-300">'Anthropic'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">badge:</span>{' '}
                  <span className="text-emerald-300">'AI Fluency: Framework & Foundations'</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">selfStudyHours:</span>{' '}
                  <span className="text-cyan-400">200</span>
                </div>
                <div className="pl-4">&#125;,</div>
                <div className="pl-4">
                  <span className="text-slate-400">passionateAbout:</span> [
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-pink-300">'Fluid 60fps Web Animation'</span>,
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-pink-300">'Prompt Engineering & AI Workflows'</span>,
                </div>
                <div className="pl-8 text-slate-300">
                  <span className="text-pink-300">'Resilient Production Code'</span>
                </div>
                <div className="pl-4">]</div>
                <div>&#125;;</div>
              </div>

              {/* Interactive Quick Launch Bar */}
              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  $ vercel --prod deployed ✓
                </span>
                <a
                  href="https://award-winning-website-with-reactjs.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                >
                  <span>demo preview</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
