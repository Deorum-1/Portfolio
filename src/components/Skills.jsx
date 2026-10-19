import React, { useState } from 'react';
import {
  Code,
  FileCode,
  Palette,
  Boxes,
  Zap,
  Activity,
  Layout,
  Cpu,
  Bot,
  CheckCircle2,
  ShieldCheck,
  Database,
  GitBranch,
  Cloud,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Languages', 'AI & Systems', 'Backend & Tools'];

  const getIcon = (iconName) => {
    const props = { className: "w-5 h-5 text-cyan-400" };
    switch (iconName) {
      case 'Code': return <Code {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Database': return <Database {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      default: return <Code {...props} />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Hands-on technical mastery across modern web development libraries, fluid animation engines, and AI workflow engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl border border-slate-800/80 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(skill.icon)}
                  </div>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      skill.level === 'Certified'
                        ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                        : skill.level === 'Expert'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Category: {skill.category}</span>
                <span className="text-cyan-400/80">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI & Animation Callout Banner */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-cyan-950/30 via-indigo-950/30 to-purple-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Anthropic AI Certified Specialist
              </h4>
              <p className="text-sm text-slate-300 max-w-xl">
                Certified in Anthropic's AI Fluency: Framework & Foundations. Capable of architecting intelligent prompt pipelines, mitigating LLM hallucinations, and benchmarking model accuracy.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white whitespace-nowrap transition-colors"
          >
            See Built Projects
          </a>
        </div>

      </div>
    </section>
  );
}
