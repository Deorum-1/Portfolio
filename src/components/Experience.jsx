import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Delivering production-grade applications independently and collaboratively within academic & technology organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Rule */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800"></div>

          <div className="space-y-10">
            {experienceData.map((job, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 group"
              >
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border-2 border-cyan-500/60 shadow-lg shadow-cyan-500/20 items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Content Card */}
                <div className="grow glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-400">
                        {job.company}
                        {job.institution && (
                          <span className="text-slate-400 font-normal block sm:inline sm:before:content-['•'] sm:before:mx-2">
                            {job.institution}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-800 border border-slate-700 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2.5 mb-6">
                    {job.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
                    <span className="text-xs text-slate-500 font-mono mr-1">Stack:</span>
                    {job.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
