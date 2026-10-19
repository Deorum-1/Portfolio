import React, { useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experienceData, educationData, certificationsData, skillsData, projectsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerDownloadConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Resume · Sokunbi Oluwaferanmi Tantoolorun
              </h3>
              <p className="text-xs text-slate-400">Software Developer (B.Sc., 2026)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Sokunbi_Oluwaferanmi_Resume.pdf"
              onClick={triggerDownloadConfetti}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-medium transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-200">
          
          {/* Header Contact Strip */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                SOKUNBI OLUWAFERANMI TANTOOLORUN
              </h1>
              <p className="text-base font-semibold text-cyan-400 mt-1">
                Software Developer
              </p>
            </div>
            <div className="text-xs space-y-1 sm:text-right font-mono text-slate-400">
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.email}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.phone}
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
              <div>
                <span className="font-semibold text-slate-300">Languages:</span>{' '}
                <span className="text-slate-400">JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Frameworks & Libraries:</span>{' '}
                <span className="text-slate-400">React.js, Next.js, GSAP, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300">Backend & Tools:</span>{' '}
                <span className="text-slate-400">Appwrite, Git/GitHub, Vercel</span>
              </div>
              <div>
                <span className="font-semibold text-slate-300">AI:</span>{' '}
                <span className="text-slate-400">Prompt engineering, AI-assisted development workflows, AI response evaluation</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experienceData.map((job, idx) => (
                <div key={idx} className="border-l-2 border-slate-700 pl-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {job.role} <span className="font-normal text-slate-400">({job.company})</span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">{job.period}</span>
                  </div>
                  {job.institution && (
                    <p className="text-xs text-slate-400 italic">{job.institution}</p>
                  )}
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300">
                    {job.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-4">
              NOTABLE PROJECTS
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 2).map((proj, idx) => (
                <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {proj.title} <span className="font-normal text-cyan-400 text-xs font-mono">({proj.tags.slice(0, 2).join(', ')})</span>
                    </h3>
                    {proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>{proj.liveUrl.replace('https://', '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300">
                    {proj.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-2">
                EDUCATION
              </h2>
              <h3 className="text-sm font-bold text-white">{educationData.degree}</h3>
              <p className="text-xs text-slate-400">{educationData.institution}</p>
              <p className="text-xs text-cyan-400/90 font-mono mt-1">Class of 2026</p>
              <p className="text-xs text-slate-400 mt-2">
                Coursework in software development, data structures and web technologies.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono mb-2">
                CERTIFICATIONS
              </h2>
              {certificationsData.map((c, i) => (
                <div key={i}>
                  <h3 className="text-sm font-bold text-white">{c.title}</h3>
                  <p className="text-xs text-purple-400 font-semibold">{c.issuer}</p>
                  <p className="text-xs text-slate-400 mt-2">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Sokunbi Oluwaferanmi Tantoolorun · Resume</span>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white font-medium"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
