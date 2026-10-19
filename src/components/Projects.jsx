import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  MonitorPlay,
  Eye
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Proven Work & Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Web Projects
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-xl">
              Production web applications demonstrating animated user experiences, clean component architectures, and responsive design systems.
            </p>
          </div>

          <a
            href="https://github.com/Deorum-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl border border-slate-800/80 p-7 sm:p-8 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500`}
              ></div>

              <div>
                {/* Header Tag and Links */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-medium text-cyan-400 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {project.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags and Live URL Bar */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl !== '#' && (
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 truncate max-w-[240px]">
                      {project.liveUrl.replace('https://', '')}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Launch app</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
