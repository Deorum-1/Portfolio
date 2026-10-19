import React from 'react';
import { GraduationCap, Award, CheckCircle2, BookOpen, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Combining rigorous computer science theory with verified real-world AI proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Card */}
          <div className="glass-panel glass-panel-hover p-7 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                  {educationData.period}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {educationData.degree}
              </h3>
              <p className="text-base font-semibold text-cyan-400 mb-4">
                {educationData.institution}
              </p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {educationData.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Key Coursework & Domains:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Location: {educationData.location}</span>
              <span className="text-emerald-400">Degree Candidate</span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="glass-panel glass-panel-hover p-7 sm:p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-slate-900/60 to-slate-950 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-900/50 border border-purple-700/50 text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-purple-300" />
                  Verified Credential
                </span>
              </div>

              {certificationsData.map((cert, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-base font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <span>Issued by {cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span className="text-xs font-mono text-slate-400">{cert.date}</span>
                  </p>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-purple-400" />
                      Core Competencies Validated:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">200+ Hours Self-Directed Study</span>
              <span className="text-purple-300 font-medium">Anthropic Certified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
