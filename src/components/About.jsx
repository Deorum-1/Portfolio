import React from 'react';
import { Layers, Sparkles, Zap, ShieldCheck, CheckCircle2, Award, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Full-Lifecycle Frontend Engineering",
      description:
        "Owning the entire development journey—from architectural planning and clean React/Next.js component design to systematic edge-case testing and continuous deployment on Vercel."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      title: "60fps GSAP & Micro-Interactions",
      description:
        "Specializing in silky-smooth scroll triggers, state transitions, and responsive user interfaces that captivate users without compromising load times or accessibility."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Certified AI Systems & Prompt Engineering",
      description:
        "Anthropic AI Fluency certified with 200+ hours dedicated to AI foundation models, prompt engineering architectures, response benchmarking, and AI-assisted engineering workflows."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Philosophy & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bridging Design Elegance with Technical Rigor
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            I build modern, resilient web products with a focus on clean architectures, intuitive user interactions, and state-of-the-art AI-augmented developer practices.
          </p>
        </div>

        {/* Story & Background Card */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                About Sokunbi Oluwaferanmi
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a detail-oriented software developer and Computer Science graduate (B.Sc., 2026, Federal University of Agriculture, Abeokuta) based in Nigeria, working with teams and clients globally.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                My approach to software engineering centers on maintainability, precision, and performance. I believe that extraordinary web experiences are created where thoughtful animation meets rock-solid code. When building applications, I review my code methodically—checking edge cases, accessibility guidelines, and responsiveness before shipping.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Clear technical documentation & communication</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Methodical debugging & edge-case validation</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Anthropic AI Fluency: Framework & Foundations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Modern CI/CD, Git branching & Vercel shipping</span>
                </div>
              </div>
            </div>

            {/* Quick Profile Summary Box */}
            <div className="lg:col-span-4 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <img
                    src="/avatar.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-[14px]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Sokunbi Feranmi</h4>
                  <p className="text-xs text-slate-400">Software Developer</p>
                  <p className="text-[11px] text-cyan-400 font-mono">B.Sc. CS 2026</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-medium text-slate-300">Abeokuta, Nigeria</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Work Model:</span>
                  <span className="font-medium text-emerald-400">Remote / Worldwide</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Certification:</span>
                  <span className="font-medium text-purple-300">Anthropic AI Fluency</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Languages:</span>
                  <span className="font-medium text-slate-300">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2.5">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
